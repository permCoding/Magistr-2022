import csv


filename = "./csv/exam_balls.csv"

with open(filename) as f:  
    reader = csv.reader(f, delimiter=";")
    
    headers = next(reader)  # читаем строку заголовков
    print(f'headers => {",".join(headers)}')

    for row in sorted(list(reader), key=lambda x: x[1]):
        print(row)  # row содержит списко с данными
