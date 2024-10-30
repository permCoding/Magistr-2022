"""
Реализация класса Node
"""
class Node:
    def __init__(self, value):
        self.key = value  # parent
        self.left = None
        self.right = None
        
    def __repr__(self):
        return f"key = {self.key}"


print(Node(666))

node5 = Node(5)

print(node5)
