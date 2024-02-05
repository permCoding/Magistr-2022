import csv
import json


filename = "./csv/abiturs.csv"

with open(filename) as f:
    reader = csv.DictReader(f, delimiter=",")
    
    # for row in reader:
    #         print(row['lastName'], row['rating'])

    filtred = filter(lambda x: x["city"] == "Кунгур", reader)
    for ab in sorted(filtred, key=lambda x: x["rating"]):
        print(json.dumps(ab, ensure_ascii=False, indent=4))
