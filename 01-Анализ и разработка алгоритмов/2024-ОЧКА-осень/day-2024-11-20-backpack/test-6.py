def get_combo(lst):
    queue = []  # queue для хранения узлов бинарного дерева перебора
    root = (0, [])  # (уровень, комбинация объектов на узле)
    queue.append(root)
    result = []
    while queue:  # пока очередь не пуста
        # level, combo = queue.pop(0)
        level, combo = queue.pop()
        
        if level < len(lst):  # есть ли ещё объекты
            next_item = lst[level]  # следующий объект
            # две ветви дерева перебора: 
            queue.append((level+1, combo+[next_item]))  # 1. с включением объекта 
            queue.append((level+1, combo))  # 2. без включения объекта
        else:
            result.append(combo[:])
    
    return sorted(result, key=lambda combo: len(combo))


lst = ['A', 'B', 'C']
# lst = [1, 2, 3, 4]

for combo in get_combo(lst):
    print(combo)
