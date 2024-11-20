# ЭТО ЛИШНЕЕ В ТЕМЕ ПРО РЮКЗАК

from itertools import product


items = [0,1,2]
for variant in product(items, repeat=3): 
    print(*variant)  # расстановка с повторами

alph = '0123456789ABCDEF'
for variant in product(alph, repeat=3): 
    print(''.join(variant))  # расстановка с повторами
