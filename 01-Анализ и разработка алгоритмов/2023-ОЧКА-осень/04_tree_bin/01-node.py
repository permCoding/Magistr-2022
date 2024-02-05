class Node:
    def __init__(self, value):
        self.key = value  # вершина - родитель
        self.left = None  # меньший ребёнок
        self.right = None  #больший ребёнок


node = Node(4)
print(node)
print(node.key, node.left, node.right)

# [1,2,3,4,5]  # random.shuffle
# [2,4,6,3,5]

# асс сложн для сбаланс дер для 1000 эл-тов 10+1
# асс сложн для random  дер для 1000 эл-тов 13+1