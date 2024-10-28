"""
Реализация класса Binary Tree Search
- методы: добавление, поиск
"""
from random import randint as rnd

class Node:
    def __init__(self, value):
        self.key = value  # вершина - родитель
        self.left = None
        self.right = None
        
    def __repr__(self):
        return f"key = {self.key}"

class BST:
    def __init__(self):  # конструктор
        self.root = None
    
    def insert(self, value):
        if self.root:  # добавляем в НЕ пустое дерево
            self._insert(self.root, value)
        else:
            self.root = Node(value)
            
    def _insert(self, node, value):
        if value < node.key:  # сравниваем с вершиной
            if node.left:
                self._insert(node.left, value)
            else:
                node.left = Node(value)
        else:
            if node.right:
                self._insert(node.right, value)
            else:
                node.right = Node(value)

    def search(self, value):
        return self._search(self.root, value)
        
    def _search(self, node, value):
        if node:
            if value == node.key:
                return node
            if value < node.key:
                return self._search(node.left, value)
            else:
                return self._search(node.right, value)
        else:
            return node


lst = [rnd(1, 1_000) for _ in range(15)]  # если сбалансировано - то 4 уровня
print(lst)

_bst = BST()
for elm in lst: _bst.insert(elm)

search_elm = lst[rnd(0, len(lst)-1)]
print(search_elm)

print( _bst.search(search_elm) )
