"""
Реализация алгоритма поиска числа:
a: линейно 
b: бинарный поиск
c: бинарный поиск - рекурсивно
d: интерполяционный поиск
e: поиск в бинарном дереве
f: поиск в массиве, который хранит бинарное дерево
"""
from random import randint, shuffle
import time


class Node:
    def __init__(self, value, id):
        self.key = value  # вершина - родитель
        self.id = id
        self.left = None
        self.right = None


def print_tree(node):
    if node:
        print(f"{node.key}; ", end="")
        print_tree(node.left)            
        print_tree(node.right)


def insert(node, value, id):
    if node:
        if value < node.key:  # сравниваем с вершиной
            node.left = insert(node.left, value, id)
        else:
            node.right = insert(node.right, value, id)
        return node
    else:  # если дерево пустое
        return Node(value, id)  # новый узел


def get_tree(lst):
    tree = None
    # версия 3: рандомная: в среднем очень хороший результат поиска (почти как бинарный поиск)
    # тут по времени приемлемо, так как нет операций изменения списка
    arr = []
    for i in range(len(lst)):
        arr.append({'value': lst[i], 'id': i})
    shuffle(arr)
    for elm in arr: tree = insert(tree, elm['value'], elm['id'])
    return tree


def tree_search(node, find_number, deep=0):
    # нужна не позиция элемента, а он сам и его атрибуты
    if node:  # print(n, tree.key)
        if find_number == node.key:
            return [node.id, deep]
        if find_number < node.key:
            return tree_search(node.left, find_number, deep+1)
        else:
            return tree_search(node.right, find_number, deep+1)
    else:
        return [node.id, deep]


def get_random_lst(amount):
    """
    Сгенерировать список случайных целых чисел в заданном диапазоне
    
    Parameters
    ----------
    amount : int
        общее количество случайных чисел в списке
    """
    lst = [randint(1, 10)]
    for _ in range(amount-1):
        lst.append(lst[-1]+randint(1, 10))
    return lst


def linear_search(lst, find_number):
    count = 0
    i = 0
    while i < len(lst):
        count += 1
        if lst[i] == find_number:
            return [i, count]
        i += 1
    return [-1, count]


def binary_search(lst, find_number):
    count = 0
    mn, mx = 0, len(lst)-1
    while mn <= mx:
        count += 1
        mid = (mn + mx) // 2
        if find_number == lst[mid]:
            return [mid, count]
        if find_number < lst[mid]:
            mx = mid - 1
        else:
            mn = mid + 1
    return [-1, count]


def bs_rec(lst, find_number, mn, mx, deep=1):
    if mn > mx: return [-1, deep]
    mid = (mn + mx) // 2
    if find_number == lst[mid]: return [mid, deep]
    if find_number < lst[mid]: 
        return bs_rec(lst, find_number, mn, mid-1, deep+1)
    else:
        return bs_rec(lst, find_number, mid+1, mx, deep+1)


def binary_search_recursive(lst, find_number):
    return bs_rec(lst, find_number, 0, len(lst)-1)


def inter_search(lst, find_number):
    count = 0
    mn, mx = 0, len(lst)-1
    while mn <= mx:
        count += 1
        k = (find_number - lst[mn]) / (lst[mx] - lst[mn])
        mid = mn + int((mx - mn) * k)
        if find_number == lst[mid]:
            return [mid, count]
        if find_number < lst[mid]:
            mx = mid - 1
        else:
            mn = mid + 1
    return [-1, count]


def examine(func, lst, find_number):
    """ это декоратор """
    def inner_func():
        start_time = time.time()
        result = func(lst, find_number)
        finish_time = time.time()
        print("timer = {:.8f}".format(finish_time - start_time))
        print(result)
    return inner_func
    
    
if __name__ == "__main__":
    lst = get_random_lst(1_000_000)
    # print(lst)
    find_number = lst[randint(0,len(lst)-1)]  # будем искать последний элемент списка
    # find_number = -10
    print(find_number)
    
    ex_a = examine(linear_search, lst, find_number)
    ex_b = examine(binary_search, lst, find_number)
    ex_c = examine(binary_search_recursive, lst, find_number)
    ex_d = examine(inter_search, lst, find_number)
    
    ex_a()  # линейный поиск
    ex_b()  # бинарный поиск
    ex_c()  # бинарный поиск рекурсивно
    ex_d()  # интерполяционный поиск
    
    tree = get_tree(lst)  # построить дерево из списка
    # print_tree(tree)
    ex_d = examine(tree_search, tree, find_number)
    ex_d()  # поиск в бинарном дереве


"""
для 1 млн случайных чисел:
время - позиция, кол-во шагов
0.08326912 - [340381, 340382]
0.00000000 - [340381, 19]
0.00000000 - [340381, 3]
0.00000000 - [True, 24]

для 10 млн случайных чисел:
1.28224373 - [5240825, 5240826]
0.00000000 - [5240825, 22]
0.00000000 - [5240825, 4]
0.00000000 - [True, 31]



поиск среди 10_000_000 чисел
проходит за 0 секунд (~23 шага)
если подготовлено бинарное дерево

если не подготовлено, то в худшем случае
10 млн шагов - это 3-4 секунды

"""