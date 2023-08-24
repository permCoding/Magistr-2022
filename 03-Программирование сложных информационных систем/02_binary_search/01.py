"""
6. Реализация алгоритма поиска числа в бинарном дереве.
"""
from random import shuffle as sh
import time


class Node:
    def __init__(self, key):
        self.key = key  # вершина - родитель
        self.left = None
        self.right = None


def insert(node, value):
    if node:
        if value < node.key:  # сравниваем с вершиной
            node.left = insert(node.left, value)
        else:
            node.right = insert(node.right, value)
        return node
    else:  # новый узел, если дерево пустое
        return Node(value)
    

def bin_search(arr, n):
    def print_tree(node):
        if node:
            print(f"{node.key}; ", end="")
            print_tree(node.left)            
            print_tree(node.right)
    
    def get_tree(arr):
        tree = None
        for key in arr:
            tree = insert(tree, key)
        return tree
        
    def find_elm(tree, n):
        if tree:
            # print(n, tree.key)
            if n == tree.key:
                return True
            elif n < tree.key:
                return find_elm(tree.left, n)
            else:
                return find_elm(tree.right, n)
        else:
            return False
    
    tree = get_tree(arr)
    # print_tree(tree); print()
    
    start_time = time.time()
    result = find_elm(tree, n)
    finish_time = time.time()
    long = finish_time - start_time
    print("{:.8f}".format(long))
    
    return result
    

def get_random_lst(mn, mx):
    return [i for i in range(mn, mx+1)]


def linear_search(lst, find_number):
    i = 0
    while i < len(lst):
        if lst[i] == find_number:
            return True
        i += 1
    return False
    
    
if __name__ == "__main__":
    lst = get_random_lst(1_000, 10_000_000)
    sh(lst)  # перемешали
    find_number = lst[-1]  # будем искать последний элемент списка
    
    # поиск в бинарном дереве
    result = bin_search(lst, find_number)
    print(result)

    # линейный поиск
    start_time = time.time()
    result = linear_search(lst, find_number)
    finish_time = time.time()
    
    long = finish_time - start_time
    print("{:.8f}".format(long))
    print(result)


"""
поиск среди 10_000_000 чисел
проходит за 0 секунд (~23 шага)
если подготовлено бинарное дерево

если не подготовлено, то в худшем случае
10 млн шагов - это 3-4 секунды

"""