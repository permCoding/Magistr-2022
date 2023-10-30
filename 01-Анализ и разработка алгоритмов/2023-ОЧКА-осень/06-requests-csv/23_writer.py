import csv


with open("./csv/exam_balls.csv") as f:
    reader = csv.reader(f, delimiter=";")
    rows = list(reader)
    titles = rows[0]  # заголовки: IdStudent;NameStudent;Sex;BallMath;BallLang;BallInf;IdDirect
    abiturs = rows[1:]  # данные
    
ab_sorted = sorted(abiturs, key=lambda x: -int(x[3]))

with open("./csv/exam.csv", "w", encoding="utf8") as f:
    writer = csv.writer(f, delimiter=",")
    writer.writerow(titles)  # записать строку заголовков
    writer.writerows(ab_sorted)  # записать все строки с данными

"""
1) отсортировать по убыванию рейтинга (сумма по трем экз)
2) выбрать 5 лучших по направлению (1, 2, 3)
3) сортировать по двум параметрам: рейтинг, фамилия
"""