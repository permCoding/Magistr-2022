class Node:
    def __init__(self, value):
        self.key = value  # вершина - родитель
        self.left = None
        self.right = None


node3 = Node(3)
node4 = Node(4)
node5 = Node(5)
node7 = Node(7)
node4.left = node3
node4.right = node5
node5.right = node7

print(node7.key, node7.left, node7.right)
print(node4.key, node4.left, node4.right)  # node4.right == node5
print(node5)