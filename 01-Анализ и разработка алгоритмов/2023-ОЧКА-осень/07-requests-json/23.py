import csv


filename = "./csv/abiturs.csv"
# filename = "./txt/17.txt"

with open(filename) as csvfile:
    reader = csv.reader(csvfile, delimiter=",")
    
    abiturs = list(reader)[1:]
    ab_sorted = sorted(abiturs, key=lambda x: x[2], reverse=True)
    for ab in ab_sorted:
        print(ab)

    titles = "id,lastName,rating,gender,birthDate,city"
    with open("./csv/result.csv", "w", encoding="utf8") as f:
        writer = csv.writer(f)
        writer.writerow(titles.split(","))
        writer.writerows(ab_sorted)
