import csv
import json


filename = "./csv/abiturs.csv"
# filename = "./txt/17.txt"

with open(filename) as csvfile:
    reader = csv.DictReader(csvfile, delimiter=",")
    
    # for row in reader:
    #         print(row['lastName'], row['rating'])

    abiturs = list(reader)
    for ab in sorted(abiturs, key=lambda x: x["rating"]):
        print(json.dumps(ab, ensure_ascii=False, indent=4))
