# ЭТО ЛИШНЕЕ В ТЕМЕ ПРО РЮКЗАК

from itertools import permutations


def get_permutations(items):
    if len(items) == 0: return [[]]  # если список пустой

    result = []  # список перестановок
    
    for i in range(len(items)):  # для каждого символа в списке
        current = items[i]  # текущий символ
        remaining_items = items[:i] + items[i+1:]  # список без текущего символа

        for permutation in get_permutations(remaining_items):  # перестановки оставшихся
            result.append([current] + permutation)  # текущий символ + новая перестановка

    return result


chars = ['A', 'B', 'C']

permutations_1 = get_permutations(chars)  # получить все перестановки
for permutation in permutations_1: print(*permutation)

print()

permutations_2 = permutations(chars, 3)  # получить все перестановки
for permutation in permutations_2: print(*permutation)
