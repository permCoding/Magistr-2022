from itertools import combinations


chars = ['A', 'B', 'C']

for amount in range(len(chars)+1):
    for combo in combinations(chars, amount):
        print(combo)
