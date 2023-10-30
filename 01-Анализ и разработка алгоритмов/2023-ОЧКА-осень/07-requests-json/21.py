import csv


filename = "./csv/abiturs.csv"
filename = "./txt/17.txt"

with open(filename) as f:  
    reader = csv.reader(f, delimiter=";")

    # for row in reader:
    #     print(row)

    abiturs = list(reader)[1:]
    for ab in sorted(abiturs, key=lambda x: x[1]):
        print(ab)
