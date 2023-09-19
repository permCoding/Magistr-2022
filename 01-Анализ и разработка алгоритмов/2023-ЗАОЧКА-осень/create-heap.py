def create_heap(arr):
    heap = []  # создали пустую кучу
    for item in arr:  # все элементы из исходной коллекции
        heap.append(item)  # по одному последовательно добавляем в конец
        pos_new = len(heap) - 1  # позиция нового элемента пока последняя
        while pos_new > 0:  # поднимаем к вершине пока есть возможность
            pos_parent = (pos_new - 1) // 2  # находим родителя
            if heap[pos_new] >= heap[pos_parent]: break  # уже правильная позиция
            heap[pos_parent], heap[pos_new] = heap[pos_new], heap[pos_parent]
            pos_new = pos_parent
    return heap


lst = [1, 4, 0]
print(create_heap(lst))

"""
минимальная куча
максимальная куча

вам самостоятельно доделать функцию поиска элемента  в построенной куче
можно использовать другой язык программирования
"""