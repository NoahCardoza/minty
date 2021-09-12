import csv
import traceback
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
                f'The category "{category}" was used but it does not exist in Mint.')

        yield CSVRow(
            date=date,
            description=description,
            category=category_id,
            amount=amount,
            notes=notes or None,
        )


def _import_csv_file(mint, rows):
    yield str(len(rows))
    for row in rows:
        try:
            mint.new_transaction(
                date=row.date,
                merchant=row.description,
                category=row.category,
                amount=row.amount,
                notes=row.notes,
            )
        except Exception:
            traceback.print_exc()
            yield '0'
            continue
        yield '1'


def import_csv_file(mint: Mint, file: str):
    # parese the whole csv to run error checking before import starts
    rows = tuple(parse_csv(mint.list_categories(), file))
    return _import_csv_file(mint, rows)
