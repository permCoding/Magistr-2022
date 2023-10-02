def get_sorted_records(filename, field=0):
    f = open(file=filename, mode='r', encoding='utf8')
    lines = f.readlines()[1:]
    records = []
    for line in lines:
        lst = line.strip().split(',')
        record = (int(lst[0]), lst[1], int(lst[2]))
        records += [record]
    records.sort(key=lambda x: x[2])
    return records


def get_index_element(records, elm):  # бинарный поиск
    l, r = 0, len(records)-1
    while l <= r:
        mid = (l+r)//2
        if elm == records[mid][2]: return mid
        if elm > records[mid][2]: l = mid+1
        if elm < records[mid][2]: r = mid-1
    return -1


records = get_sorted_records("./abiturs.csv", 2)
index = get_index_element(records, 9)
if index > -1: print(records[index])


"""
- задача, ввести третий параметр - направление сортировки
- direct="asc" или "desc"
"""