def gen_combo(combo=[], level=0):
    if level == len(lst):
        print(combo)  # новая комбинация объектов
    else:
        combo.append(lst[level])  # 1 взяли объект
        gen_combo(combo, level+1)
        combo.pop()               # 2 НЕ взяли объект
        gen_combo(combo, level+1)


lst = ['A', 'B', 'C']
# lst = [1, 2, 3, 4]

gen_combo()  # поиск комбинации
