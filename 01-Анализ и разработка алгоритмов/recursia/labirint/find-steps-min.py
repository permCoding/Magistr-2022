def get_lab(file_name):
    with open(file_name) as f:
        lines = f.readlines()
    return [[int(x) for x in s.split(',')] for s in lines]


def find_ways(x, y, v):
    if x == rx-1 and y == ry-1:  # точка останова
        price_ways.append(v)
    else:  # шаги рекурсии
        if x < rx-1:
            find_ways(x+1,y,v+lab[y][x+1])
        if y < ry-1:
            find_ways(x,y+1,v+lab[y+1][x])


lab = get_lab('./steps/step4.txt')
for row in lab:
    print(*row)
rx, ry = len(lab[0]), len(lab)
price_ways = []
find_ways(0, 0, lab[0][0])
# print(price_ways)
print(max(price_ways))

'''
разработать функцию поиска пути минимальной длины
в ячейках лабиринта хранятся величины шагов, 
которые можно делать из ячеек
выводы:
- минимальное кол-во шагов
- и сам маршрут в таком виде: x1y3x2
'''
