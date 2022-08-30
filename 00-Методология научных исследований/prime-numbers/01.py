results = []

for n in range(1000, 10000+1, 1000):
    lst = [i for i in range(n+1)]

    step = 2
    while step*step < n:
        i = step
        while lst[step] == 0 and i < n+1:
            i += 1
        i = i**2
        while i < n+1:
            lst[i] = 0
            i += step
        step += 1

    results.append(len(list(filter(lambda x: x>0, lst)))-1)
    # results.append(len(lst) - lst.count(0))

print(results)

for i in range(len(results)-1, 0, -1):
    results[i] -= results[i-1]

print(results)

# https://ru.calculat.io/number/prime/3000--4000 - тут можно проверить
