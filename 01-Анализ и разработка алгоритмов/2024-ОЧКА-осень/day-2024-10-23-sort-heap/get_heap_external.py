def get_heap(arr):  # у max-кучи - на вершине max
    heap = []  # создали пустую кучу - дополнительная память
    for item in arr:  # все элементы исходной коллекции
        heap.append(item)  # по одному добавляем в кучу
        pos = len(heap) - 1  # у нов элемента пока последняя позиция
        while pos > 0:  # поднимаем его к вершине пока есть возможность
            pos_parent = (pos - 1) // 2
            if heap[pos_parent] >= heap[pos]: break  # если родитель больше
            heap[pos_parent], heap[pos] = heap[pos], heap[pos_parent]
            pos = pos_parent
    return heap


# lst = [1, 4, 5, 2]
lst = [1, 4, 5, 2, 0]
print(get_heap(lst))
