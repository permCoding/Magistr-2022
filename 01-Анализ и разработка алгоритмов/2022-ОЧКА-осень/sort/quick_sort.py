from random import randint as r
from timeit import default_timer as t
import os


def quick_sort(lst):
    """
    left + middle + right
    [] + [elm] + []
    [elm] + [elm] + []
    [] + [elm] + [elm]
    [elm] + [elm] + [elm]
    """
    if len(lst) < 2:
        return lst
    else:
        pivot = lst[0]  # это чревато - переделать на рандомный элемент
        left = quick_sort(list(filter(lambda x: x < pivot , lst))) 
        middle = list(filter(lambda x: x == pivot , lst))
        right = quick_sort(list(filter(lambda x: x > pivot , lst)))
        # тут три прохода по списку lst - переделать в один цикл
        # гипотеза - при исправлении возрастёт скорость в 2,5 раза
        return left + middle + right


os.system('cls')

count = 1000000
lst = [r(0, 1000) for _ in range(count)]
print(lst[:10])

start = t()
s_lst = quick_sort(lst)
# s_lst = sorted(lst)
print(round(t() - start, 3))
print(s_lst[:10])
