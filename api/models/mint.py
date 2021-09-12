from typing import List, Literal, Optional, Union

from pydantic import BaseModel, validator

from . import validate_mint_date


class ListAccountsResponseSetItemDataItem(BaseModel):
    fi: str

    dueAmt: Optional[float]
    dueDate: Optional[str]
    validate_dueDate = validator(
        'dueDate', allow_reuse=True)(validate_mint_date)

    isTerminal: bool
    bal: int
    type: Optional[Union[str, int]]
    isHidden: bool

    lastUpdated: str
    isError: bool
    isClosed: bool
    oname: str
    rate: int
    klass: str
    name: str
    id: int
    value: str  # "$0"


class ListAccountsResponseSetItem(BaseModel):
    data: List[ListAccountsResponseSetItemDataItem]
    id: Literal['accounts']


class ListAccountsResponse(BaseModel):
    set: List[ListAccountsResponseSetItem]


class ListCategoriesResponseSetItemDataItemChildren(BaseModel):
    isStandard: bool
    id: int
    value: str
    isL1: bool


class ListCategoriesResponseSetItemDataItem(BaseModel):
    children: List[ListCategoriesResponseSetItemDataItemChildren]
    id: int
    value: str
    isL1: bool


class ListCategoriesResponseSetItem(BaseModel):
    data: List[ListCategoriesResponseSetItemDataItem]
    id: Literal['categories']


class ListCategoriesResponse(BaseModel):
    set: List[ListCategoriesResponseSetItem]
