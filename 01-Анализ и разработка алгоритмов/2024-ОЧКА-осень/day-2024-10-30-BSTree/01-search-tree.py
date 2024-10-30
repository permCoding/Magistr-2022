"""
Реализация класса Node
  - создание дерева вручную
  - методы: поиск в дереве
"""
class Node:
    def __init__(self, value):
        self.key = value  # parent
        self.left = None
        self.right = None
        
    def __repr__(self):
        return f"key = {self.key}"
        
def search(node, value):
    if node:
        if value == node.key:
            return node
        if value < node.key:
            return search(node.left, value)
        else:
            return search(node.right, value)
    else:
        return None

node5 = Node(5)  # root
node8 = Node(8)
node3 = Node(3)
node4 = Node(4)
node6 = Node(6)

node5.left = node3
node5.right = node6

node3.right = node4
node6.right = node8

print(node5)

root = node5
print(search(root, 7))  # None
print(search(root, 4))  # key = 4
print(search(root, 6))  # key = 6
