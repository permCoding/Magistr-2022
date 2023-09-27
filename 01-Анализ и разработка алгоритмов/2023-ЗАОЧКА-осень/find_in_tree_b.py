def get_tree():
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


def find_in_tree(node, finder_elm, deep=0):
    if node:  # node != None
        if finder_elm == node["key"]:
            return (True, deep)
        elif finder_elm < node["key"]:
            return find_in_tree(node["left"], finder_elm, deep+1)
        else:
            return find_in_tree(node["right"], finder_elm, deep+1)
    else:
        return (False, deep)


def get_avg_deep(tree, check_elements):
    avg = 0
    for elm in check_elements:
        res, deep = find_in_tree(tree, elm)
        print(res, deep)
        avg += deep
    avg /= len(check_elements)
    return avg


tree = get_tree()  # [4, 3, 7, 5]
check_elements = [5,8,3,4,7]
print(f"avg = {get_avg_deep(tree, check_elements)}")

"""
функция get_tree - получить дерево 
реализуйте самостоятельно
на вход подаётся список - на выходе дерево
можно использовать другой язык программирования
"""