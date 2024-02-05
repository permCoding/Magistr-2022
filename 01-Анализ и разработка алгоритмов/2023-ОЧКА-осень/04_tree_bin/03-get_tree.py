class Node:
    def __init__(self, value):
        self.key = value  # вершина - родитель
        self.left = None
        self.right = None


def get_tree():
    node2 = Node(2)
    node4 = Node(4)
    node5 = Node(5)
    node6 = Node(6)
    node7 = Node(7)
    tree = node4
    node4.left, node4.right = node2, node6
    node6.left, node6.right = node5, node7
    return tree


def find_in_tree(node, finder_elm):
    if node:  # node != None
        if finder_elm == node.key:
            return True
        elif finder_elm < node.key:
            return find_in_tree(node.left, finder_elm)
        else:
            return find_in_tree(node.right, finder_elm)
    else:
        return False


tree = get_tree()  # [3, 4, 5, 7]
check_elements = [3, 5, 8, 4, 7, 6, 2]
for elm in check_elements:
    print(f"elm = {elm} => {find_in_tree(tree, elm)}")
