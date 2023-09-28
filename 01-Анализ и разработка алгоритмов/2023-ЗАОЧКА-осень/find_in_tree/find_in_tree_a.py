from os import system


def get_tree():
    # сначала перемешать
    node5 = {
        "key": 5,
        "left": None,
        "right": None
    }
    node3 = {
        "key": 3,
        "left": None,
        "right": None
    }
    node7 = {
        "key": 7,
        "left": node5,
        "right": None
    }
    tree = {
        "key": 4,
        "left": node3,
        "right": node7
    }
    return tree


def find_in_tree(node, finder_elm):
    if node:  # node != None
        if finder_elm == node["key"]: return True
        if finder_elm < node["key"]:
            return find_in_tree(node["left"], finder_elm)
        else:
            return find_in_tree(node["right"], finder_elm)
    else:
        return False


system("clear")  # for Win - cls
tree = get_tree()  # [4, 3, 7, 5]
check_elements = [5,8,3,4,7]
for elm in check_elements:
    print(f"{elm} => {find_in_tree(tree, elm)}")

"""
функция get_tree - получить дерево 
реализуйте самостоятельно
на вход подаётся список - на выходе дерево
можно использовать другой язык программирования
"""