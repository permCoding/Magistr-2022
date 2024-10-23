def swap(t, i, j): t[i], t[j] = t[j], t[i]

def get_heap(t):
    # heap = [7, 4, 5, 3, 1, 2]
    heap = [95, 70, 27, 67, 32, 16, 24, 19, 64, 21]
    return heap

def get_sorted(arr):
    def down_elm(n):
        i = 0  # 2*i+1; 2*i+2
        while 2*i+1 < n:
            ch_1 = arr[2*i+1] if 2*i+1 < n else -float('inf')
            ch_2 = arr[2*i+2] if 2*i+2 < n else -float('inf')
            fam = [ [arr[i],i], [ch_1,2*i+1], [ch_2,2*i+2] ]
            max_pos = max(fam)[1]
            if i == max_pos: break
            swap(arr, i, max_pos)
            i = max_pos
    
    n = len(arr)
    while n > 1:
        swap(arr, 0, n-1)
        n -= 1
        down_elm(n)
    return arr


arr = []
heap = get_heap(arr)
print(heap)
srt = get_sorted(heap)
print(srt)

"""
https://ru.wikipedia.org/wiki/Куча_(структура_данных)
Кучи обычно реализуются в виде массивов, 
что исключает наличие указателей между её элементами.
"""