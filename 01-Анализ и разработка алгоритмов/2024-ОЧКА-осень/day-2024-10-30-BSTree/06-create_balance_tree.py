class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def arr_to_bst(arr):
    if not arr: return None
    mid = len(arr) // 2
    node = Node(arr[mid])  # создаём срединный узел
    node.left  = arr_to_bst(arr[:mid])    # формируем ему левое поддерево
    node.right = arr_to_bst(arr[mid+1:])  # и правое поддерево
    return node  # готовый узел возвращаем


def print_bst(node, deep=0):
    if node:
        print_bst(node.right, deep+1)
        print(f"{4*' '*deep}{node.value}")
        print_bst(node.left, deep+1)


arr = [7, 2, 5, 4, 3, 6, 1]
arr = sorted(arr)  # [1, 2, 3, 4, 5, 6, 7]
bst = arr_to_bst(arr)
print_bst(bst)
