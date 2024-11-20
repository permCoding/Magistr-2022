def gen_combinations(items, combo=[], level=0):
    print(combo)
    for i in range(level, len(items)):  # найти все оставшиеся
        gen_combinations(items, combo+[items[i]], i+1)


chars = ['A', 'B', 'C']
gen_combinations(chars)
