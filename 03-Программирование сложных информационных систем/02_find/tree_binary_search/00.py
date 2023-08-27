"""
6. Реализация алгоритма поиска числа в бинарном дереве.
"""

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
    
def solver(arr, n):
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
    print_tree(tree); print()
    return find_elm(tree, n)
    

if __name__ == "__main__":
    print(solver([4,9,1,2,3,5], 9))
