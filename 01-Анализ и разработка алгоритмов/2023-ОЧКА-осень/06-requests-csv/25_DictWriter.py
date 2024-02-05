import csv
import json


filename = "./csv/abiturs.csv"

with open(filename, "r", encoding="utf8") as f:
    reader = csv.DictReader(f, delimiter=",")
    rows = list(reader)
    titles = rows[0]  # заголовки
    abiturs = rows[1:]  # данные

    with open("./csv/result.csv", "w", encoding="utf8") as f:
        writer = csv.DictWriter(f, fieldnames=titles)
        writer.writeheader()

        filtred = list(filter(lambda x: x["city"] == "Кунгур", abiturs))
        for ab in sorted(filtred, key=lambda x: x["rating"]):
            writer.writerow(ab)
