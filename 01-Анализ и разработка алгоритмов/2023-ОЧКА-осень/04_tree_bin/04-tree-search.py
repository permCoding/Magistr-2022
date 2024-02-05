from random import shuffle


class Node:
    def __init__(self, value):
        self.key = value  # вершина - родитель
        self.left = None
        self.right = None


def find_in_tree(node, elm):
    if node:
        if elm == node.key: return True
        if elm < node.key:
            return find_in_tree(node.left, elm)
        else:
            return find_in_tree(node.right, elm)
    else:
        return False


def add_in_tree(node, elm):
    if node:
        if elm < node.key:
            node.left = add_in_tree(node.left, elm)
        else:
            node.right = add_in_tree(node.right, elm)
        return node
    else:
        return Node(elm)


def get_tree(lst):
    shuffle(lst)
    tree = None
    for elm in lst:
        tree = add_in_tree(tree, elm)
    return tree


lst = [1, 2, 3, 4]
tree = get_tree(lst)
check_elements = [3, 5, 8, 4, 7, 6, 2, 1]
for elm in check_elements:
    print(f"elm = {elm} => {find_in_tree(tree, elm)}")
