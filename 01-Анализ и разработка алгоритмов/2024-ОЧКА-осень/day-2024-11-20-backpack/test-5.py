def get_combo(lst):
    result = []  # список комбинаций взятых предметов
    
    queue = []  # хранение узлов бинарного дерева перебора
    root = (0, [])  # (уровень, комбинация объектов на узле)
    queue.append(root)
    
    while queue:  # пока очередь не пуста
        level, combo = queue.pop()  # pop(0) - если нужна очередь
        
        if level < len(lst):  # есть ли ещё объекты
            queue.append((level+1, combo+[lst[level]]))  # 1. с включением объекта 
            queue.append((level+1, combo))  # 2. без включения объекта
        else:
            result += [combo]  # result.append(combo)
    
    return sorted(result, key=lambda combo: len(combo))


lst = ['A', 'B', 'C']
# lst = [1, 2, 3, 4]

for combo in get_combo(lst):
    print(combo)
