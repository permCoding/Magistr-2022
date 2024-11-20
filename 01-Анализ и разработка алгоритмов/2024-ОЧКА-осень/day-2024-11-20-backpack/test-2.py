def  get_combinations(items):
    combs = []
    def gen_combs(combo=[], level=0):
        combs.append(combo[:])  # нужно делать клон
        for i in range(level, len(items)):  # найти все оставшиеся
            gen_combs(combo+[items[i]], i+1)
    
    gen_combs()
    
    return sorted(combs, key=lambda x: len(x))


lst = ['A', 'B', 'C']
# lst = [1, 2, 3, 4]

combinations = get_combinations(lst)

for combination in combinations: 
    print(combination)

"""
зачастую не требуется получать полный список всех комбинаций
их слишком много

1) можно по ходу генерации методом ветвей и границ 
отсекать неподходящие продолжения для генерации
а сохранять только лучшую комбинацию

2) переписать функцию в виде итератора
"""