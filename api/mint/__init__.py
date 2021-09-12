from json.decoder import JSONDecodeError
from typing import Dict, Literal

import requests
from api.models.mint import ListAccountsResponse, ListCategoriesResponse

MINT_TASK = Literal['accounts', 'categories', 'transactions']


class MintAPIError(Exception):
    """Raised when the API doesn't return JSON but the session is still valid.
    """


class MintSessionExpired(MintAPIError):
    """Raised when the user session has expired.
    """


class MintAPI:
    def __init__(self, cookies):
        self.s = requests.Session()
        self.s.cookies.update(cookies)
        self.s.headers.update({
            'authority': 'mint.intuit.com',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://mint.intuit.com',
            'referer': 'https://mint.intuit.com/transaction.event',
            'accept': '*/*',
        })
        self._js_token = None

    @property
    def js_token(self):
        if self._js_token is None:
            res = self.s.get('https://mint.intuit.com/transaction.event')
            self._js_token = res.text.split('token" type="hidden" value="', 1)[
                1].split('"', 1)[0]
        return self._js_token

    def get(self, event, task: MINT_TASK, **params):
        # TODO: what is :: &rnd=1630912490999?
        res = self.s.get(f'https://mint.intuit.com/{event}.xevent', params={
            'task': task,
            **params,
        })

        if res.status_code == 200:
            try:
                return res.json()
            except JSONDecodeError:
                if 'Session has expired.' in res.text:
                    raise MintSessionExpired(res)
        raise MintAPIError(res)

    def post(self, event, task: MINT_TASK, **params):
        # TODO: what is :: &rnd=1630912490999?
        res = self.s.post(f'https://mint.intuit.com/{event}.xevent', data={
            'task': task,
            **params,
        })

        if res.status_code == 200:
            try:
                return res.json()
            except JSONDecodeError:
                pass
        raise Exception(res.text)

    def list_categories(self) -> ListCategoriesResponse:
        return ListCategoriesResponse(**self.get('app/getJsonData', task='categories'))

    def list_accounts(self) -> ListAccountsResponse:
        return ListAccountsResponse(**self.get('app/getJsonData', task='accounts'))

    def new_transaction(self, date: str, merchant: str, category: int, amount: float, notes: str = None):
        """[summary]

        Args:
            account_id (int): [description]
            date (str): '09/06/2021'
            merchant (str): [description]
            amount (float): [description]
            note (str, optional): [description]. Defaults to ''.
            check_number (Optional[int], optional): [description]. Defaults to None.
        """

        params = {
            'txnId': ':0',
            'cashTxnType': 'on',
            'mtCashSplitPref': '2',
            'mtType': 'cash',

            'date': date,
            'merchant': merchant,
            'catId': category,
            'amount': amount,

            'mtIsExpense': 'true' if amount < 0 else 'false',

            'token': self.js_token,
        }

        if notes is not None:
            params['note'] = notes

        return self.post('updateTransaction', task='txnadd', **params)


class Mint:
    def __init__(self, session):
        self.api = MintAPI(cookies=session)

    def list_accounts(self):
        res = self.api.list_accounts()
        return [
            {
                'name': f'{a.fi} — {a.name} :: {a.value}',
                'value': a.id,
            } for a in res.set[0].data
        ]

    def list_categories(self) -> Dict[str, int]:
        res = self.api.list_categories()
        categories = {}
        for parent in res.set[0].data:
            categories[parent.value] = parent.id
            for child in parent.children:
                categories[child.value] = child.id

        return categories

    def list_categories_with_groups(self):
        res = self.api.list_categories()
        categories = []
        for parent in res.set[0].data:
            group = {
                'name': parent.value,
                'children': []
            }
            for child in parent.children:
                group['children'].append(child.value)
            categories.append(group)

        return categories

    def new_transaction(self, date: str, merchant: str, category: int, amount: float, notes: str = None):
        return self.api.new_transaction(date, merchant, category, amount, notes)
