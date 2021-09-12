from datetime import datetime


def validate_mint_date(cls, date: str) -> str:
    year_type = '%Y' if len(date.rsplit('/', 1)[-1]) == 4 else '%y'
    try:
        timestamp = datetime.strptime(date, f'%m/%d/{year_type}')
        return timestamp.strftime(f'%m/%d/%Y')
    except ValueError:
        raise ValueError(
            f'{date} is an invalid Mint date. Format much conform to "mm/dd/yy" or "m/d/yyyy".')
