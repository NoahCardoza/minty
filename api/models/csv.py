from typing import Optional

from pydantic import BaseModel, validator

from . import validate_mint_date


class CSVRow(BaseModel):
    date: str
    validate_date = validator('date', allow_reuse=True)(validate_mint_date)

    description: str
    category: int
    
    amount: float

    notes: Optional[str]
