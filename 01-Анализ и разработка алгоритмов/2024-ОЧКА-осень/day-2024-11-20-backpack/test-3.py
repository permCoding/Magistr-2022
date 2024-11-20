def gen_combinations(items):
    
    def _gen_combs(combo=[], level=0):
        yield combo  # Возвращаем текущую комбинацию
        for i in range(level, len(items)):
            yield from _gen_combs(combo+[items[i]], i+1)

    yield from _gen_combs()

lst = ['A', 'B', 'C']

combinations = gen_combinations(lst)

print(type(combinations))

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