from backpack import Greedy, BinMask, Recurs, Que, Dinamic, Genetic
import json


with open('./json/input4.json') as file:
    data = json.load(file)  # исходные данные

max_w = 100  # размер ранца

solver = Greedy(max_w, data)
# solver = BinMask(max_w, data)
# solver = Recurs(max_w, data)
# solver = Que(max_w, data)
# solver = Dinamic(max_w, data)
# solver = Genetic(max_w, data)

max_value, result = solver.solve()  # ценность и список id объектов, взятых в рюкзак

print(f"Максимальная ценность рюкзака: {max_value}")
print(f"Объекты в рюкзаке: {[item.id for item in result]}")
