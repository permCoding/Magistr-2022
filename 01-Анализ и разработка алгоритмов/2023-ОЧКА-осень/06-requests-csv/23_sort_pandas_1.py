import csv
import pandas as pd


def get_df(filename):
    with open(filename) as f:
        reader = csv.reader(f)
        titles = next(reader)  # заголовки
        dct = { "lastName":[], "rating":[], "city":[] }
        for row in reader:
            dct["lastName"] += [row[1]]
            dct["rating"] += [row[2]]
            dct["city"] += [row[5]]
        # print(dct)
    return pd.DataFrame(dct)


df = get_df("./csv/abiturs.csv")
# print(df)
# df.sort_values(["city","rating"], inplace=True)
# print(df)
df = df.sort_values(["city","rating","lastName"], ascending=[True,False,True])
print(df)
