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
        print(node)
        if node:
            if value == node.key:
                return node
            if value < node.key:
                return self._search(node.left, value)
            else:
                return self._search(node.right, value)
        else:
            return node

    def sorted(self):
        return self._sorted(self.root)

    def _sorted(self, node):
        lst_ord = []
        if node:
            lst_ord = self._sorted(node.left)
            lst_ord += [node.key]
            lst_ord += self._sorted(node.right)
        return lst_ord

    def print_tree(self):
        print('binary tree >>>')
        self._print_tree(self.root)
        print('<<< = = = = = = = ')
    
    def _print_tree(self, node, deep=0):
        if node:
            self._print_tree(node.right, deep+1)
            print(f"{4*' '*deep}{node.key}")
            self._print_tree(node.left, deep+1)

if __name__ == "__main__":
    lst = [rnd(1, 1_000) for _ in range(15)]  # если сбалансировано - то 4 уровня
    lst = [1,2,3,4,5,6,7]  # худший случай
    lst = list(reversed(lst))  # худший случай
    # лучший вариант - добавить на вершину среднее значение и
    # добавлять справа среднее значение из оставшихся справа
    # добавлять слева среднее значение из оставшихся слева
    print(lst)
    
    _bst = BST()
    for elm in lst: _bst.insert(elm)
    print(_bst.sorted())
    _bst.print_tree()

"""
поиск среди 10_000_000 чисел
проходит за 0 секунд (~23 шага)
если подготовлено бинарное дерево

если не подготовлено, то в худшем случае
10 млн шагов - это 3-4 секунды
"""
