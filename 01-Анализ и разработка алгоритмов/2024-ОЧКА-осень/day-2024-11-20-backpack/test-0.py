from itertools import combinations


chars = ['A', 'B', 'C']

for i in range(len(chars)+1):
    for combo in combinations(chars, i):
        print('-', *combo)
