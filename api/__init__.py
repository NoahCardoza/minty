from typing import Dict, List

from fastapi import FastAPI, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.param_functions import Depends
from fastapi.params import Body
from pydantic import Field, Json
from pydantic.main import BaseModel

from api.mint import Mint
from api.utils.cookies import filter_cookies_text
from api.utils.fastapi import as_form
from api.utils.mint import import_csv_file

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# async


@app.post("/api/start")
def start(cookies: bytes = File(default=None)):
    session = filter_cookies_text(cookies.decode())
    mint = Mint(session)

    return {
        'session': session,
        'categories': mint.list_categories_with_groups(),
    }

# async


@app.post("/api/import")
def mint_import(csv: bytes = File(None), session: Json[Dict[str, str]] = Body(None)):
    mint = Mint(session)

    try:
        import_csv_file(mint, csv.decode('utf-8-sig'))
    except ValueError as e:
        message, = e.args
        raise HTTPException(400, detail=message)

    return {
        'success': True
    }
