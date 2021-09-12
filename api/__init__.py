import traceback
from typing import Dict

from fastapi import FastAPI, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Body
from fastapi.responses import StreamingResponse
from pydantic import Json
from pydantic.error_wrappers import ValidationError

from api.mint import Mint, MintSessionExpired
from api.utils.cookies import filter_cookies_text
from api.utils.mint import import_csv_file

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/start")
def start(cookies: bytes = File(default=None)):
    session = filter_cookies_text(cookies.decode())

    try:
        mint = Mint(session)

        return {
            'session': session,
            'categories': mint.list_categories_with_groups(),
        }
    except MintSessionExpired:
        raise HTTPException(400, 'The cookies have expired.')


@app.post("/api/import")
def mint_import(csv: bytes = File(None), session: Json[Dict[str, str]] = Body(None)):
    mint = Mint(session)

    try:
        gen = import_csv_file(mint, csv.decode('utf-8-sig'))
        return StreamingResponse(gen)
    except ValidationError as e:
        raise HTTPException(400, str(e))
    except ValueError as e:
        message, = e.args
        raise HTTPException(400, message)
    except MintSessionExpired:
        raise HTTPException(400, 'The cookies have expired.')
    except Exception:
        traceback.print_exc()
        raise HTTPException(500, 'An unknown error occured. Try again.')
