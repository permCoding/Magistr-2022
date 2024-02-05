import csv


def get_lines(filename):
    with open(filename) as f:
        reader = csv.reader(f, delimiter=",")
        return list(reader)[1:]


def process_data(abiturs):
    lst = list(map(lambda t: [t[1], int(t[2]), t[5]], abiturs))
    filtred = filter(lambda x: x[2] == "Кунгур", lst)
    return sorted(filtred, key=lambda x: -x[1])


def create_csv(filename, data):
    with open(filename, "w", encoding="utf8") as f:
        lines = [f"{row[1]},{row[0]},{row[2]}\n" for row in data]
        f.writelines(lines)


filename = "./csv/abiturs.csv"
lines = get_lines(filename)
data = process_data(lines)
create_csv("./csv/result.csv", data)


