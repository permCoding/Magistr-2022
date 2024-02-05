import csv


filename = "./csv/abiturs.csv"
# filename = "./csv/exam_balls.csv"

with open(filename) as f:
    # for line in f: print(line)
    reader = csv.reader(f, delimiter=",")

    # for row in reader: print(row)

    abiturs = list(reader)[1:]  # убираем строку заголовков
    
    # for ab in sorted(abiturs, key=lambda x: x[1]):
    #     print(ab)
    
    # lst = sorted(abiturs, key=lambda x: int(x[2]), reverse=True)
    # for ab in lst[:5]:
    #     print(ab)

    res = list(map(lambda t: [t[1], int(t[2]), t[5]], abiturs))
    f = open("./csv/result.csv", "w", encoding="utf8")
    for row in sorted(res, key=lambda x: -x[1]):
        f.write(f"{row[1]},{row[0]},{row[2]}\n")
    f.close()
