from urllib.parse import unquote

COOKIE_NAME_INDEX = 5
COOKIE_VALUE_INDEX = 6
COOKIE_NAME_WHITELIST = set(
    ('MINTJSESSIONID', 'ROUTEID', 'mint.authid', 'mint.ticket', 'mint.glogin'))


def filter_cookies_text(cookies_text: str):
    cookies = {}

    for cookie in cookies_text.splitlines():
        cols = cookie.split('\t')
        if 'credit.finance.intuit.com' not in cookie and COOKIE_NAME_WHITELIST.intersection(set(cols)):
            cookies[cols[COOKIE_NAME_INDEX]] = unquote(
                cols[COOKIE_VALUE_INDEX])

    return cookies
