class Node:
    def __init__(self, value):
        self.key = value  # вершина - родитель
        self.left = None
        self.right = None


node = Node(4)
# print(node)
print(node.key, node.left, node.right)
