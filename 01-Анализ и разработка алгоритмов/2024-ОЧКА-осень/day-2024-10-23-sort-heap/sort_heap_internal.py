def swap(t, i, j): t[i], t[j] = t[j], t[i]  # поменять местами

def get_max_from_trio(arr, i, end):  # i - parent, end - правая граница
    max_pos, ch_l, ch_r = i, 2*i+1, 2*i+2  # parent and children
    if ch_l < end and arr[ch_l] > arr[max_pos]: max_pos = ch_l
    if ch_r < end and arr[ch_r] > arr[max_pos]: max_pos = ch_r
    return max_pos  # позицию max value из трёх

def down_elm(arr, i, end):  # погрузить элем от i до end
    pos_max = get_max_from_trio(arr, i, end)  # i - позиция родителя
    if i != pos_max:  # пока можно погружать
        swap(arr, i, pos_max)  # погружаем
        down_elm(arr, pos_max, end)  # попытка ещё погрузить

def get_heap(arr):  # из массива => в max-кучу
    for i in range(len(arr)//2-1, -1, -1):
        down_elm(arr, i, len(arr))  # погрузить до дна
    return arr  # это уже heap, на вершине max

def sort_heap(arr):  # отсортировать кучу
    for right in range(len(arr)-1, 0, -1):
        swap(arr, 0, right)  # max на правую границу, эл-нт в 0
        down_elm(arr, 0, right)  # погрузить нулевой эл-нт до < right
    return arr  # возврщаем отсортированный массив


# пирамидальная сортировка (максимальная куча)
lst = [3,1,2,4,2,9]  # неотсортированный список
heap = get_heap(lst)  # получить максимальную кучу
print(heap)  # [9, 4, 3, 1, 2, 2] - max-куча
srt = sort_heap(heap)  # отсортировать
print(srt)  # [1, 2, 2, 3, 4, 9] - отсортирован




# from random import randint as rnd
# from timeit import default_timer as dt
# # lst = [rnd(1, 10_000) for _ in range(500_000)]
# lst = [3,1,2,4,2,9]
# # print(lst)

# st = dt()
# heap = get_heap(lst)  # [9, 4, 3, 1, 2, 2]
# print(heap)  # [1, 2, 2, 3, 4, 9]
# srt = sort_heap(heap)
# print(srt)
# fi = dt()
# print(fi-st)

# num<10_000 cnt=500_000 t=11 sec - get_max_from_trio_
# num<10_000 cnt=500_000 t=07 sec - get_max_from_trio