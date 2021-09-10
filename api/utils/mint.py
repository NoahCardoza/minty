import csv
from typing import Dict, Generator

from api.mint import Mint
from api.models.csv import CSVRow


def ordinal(n): return "%d%s" % (
    n, "tsnrhtdd"[(n//10 % 10 != 1)*(n % 10 < 4)*n % 10::4])


COLUMN_NAMES = ('Date', 'Description', 'Category', 'Amount', 'Notes')
COLUMNS_LEN = len(COLUMN_NAMES)


def parse_csv(categories: Dict[str, int], file: str) -> Generator[CSVRow, None, None]:
    reader = csv.reader(file.splitlines())
    header = reader.__next__()

    header_len = len(header)
    if header_len < COLUMNS_LEN:
        raise ValueError('The CSV is missing some columns.')
    if header_len > COLUMNS_LEN:
        raise ValueError('The CSV has extra columns.')

    for i in range(header_len):
        if COLUMN_NAMES[i] != header[i]:
            raise ValueError(
                f'The {ordinal(i)} column is missnamed. It should be "{COLUMN_NAMES[i]}".')

    for row in reader:
        (date, description, category, amount, notes) = row
        amount = float(amount.replace('$', ''))
        category_id = categories.get(category)
        if category_id is None:
            raise ValueError(
                f'The category "{category}" was but it does not exist in Mint.')

        yield CSVRow(
            date=date,
            description=description,
            category=category_id,
            amount=amount,
            notes=notes or None,
        )


def import_csv_file(mint: Mint, file: str):
    # parese the whole csv to run error checking before import starts
    for row in tuple(parse_csv(mint.list_categories(), file)):
        res = mint.new_transaction(
            date=row.date,
            merchant=row.description,
            category=row.category,
            amount=row.amount,
            notes=row.notes,
        )
        print(res)


if __name__ == '__main__':
    session = {'ROUTEID': '.', 'mint.glogin': 'noahcardoza@gmail.com', 'mint.authid': '123145668410787',
               'mint.ticket': 'V1-72-X0nuvnshccfysjszfjhraa', 'MINTJSESSIONID': '590204751ECBB66D7188B46A7871B495-n1'}
    mint = Mint(session)

    file = b"""Date,Description,Category,Amount,Check #,Notes
    2/24/21,PAY BY PHONE ACH PAYMENT,Credit Card Payment,99.95,,
    4/29/21,Amazon.com*UG9HO8ZE3 Amzn.com/bill WA,Home Supplies,-99.95,,
    3/1/21,Amazon.com*7Q7FA84I3 Amzn.com/bill WA,Home Improvement,-162.54,,
    2/15/21,WWW COSTCO COM 800-955-2292 WA,Groceries,-67.97,,
    2/15/21,AMZN Mktp US*375FV8O23 Amzn.com/bill WA,Home Supplies,-14.96,,
    7/20/20,AMZN Mktp US*MV96B2BA1 Amzn.com/bill WA,Home Supplies,-77.18,,
    7/15/20,AMZN MKTP US*MJ3IX49Z2 AMZN.COM/BILL WA,Home Supplies,-30.34,,"""

    import_csv_file(mint, file.decode())
