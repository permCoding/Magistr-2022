import csv
import pandas as pd
from functools import reduce


def get_df(filename):
    def add(acc, cur):
        acc["lastName"] += [cur[1]]
        acc["rating"] += [cur[2]]
        acc["city"] += [cur[5]]
        return acc
    with open(filename) as f:
        reader = csv.reader(f)
        init = {"lastName":[], "rating":[], "city":[]}
        dct = reduce(add, list(reader)[1:], init)
        # print(dct)
    return pd.DataFrame(dct)


df = get_df("./csv/abiturs.csv")
# print(df)
# df.sort_values(["city","rating"], inplace=True)
# print(df)
df = df.sort_values(["city","rating","lastName"], ascending=[True,False,True])
print(df)
