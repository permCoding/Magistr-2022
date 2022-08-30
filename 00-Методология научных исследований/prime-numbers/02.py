results = []

n = 150000

lst = [i for i in range(n+1)]
lst[1] = 0
step = 2
while step*step <= n:
    i = step
    while lst[step] == 0 and i < n+1:
        i += 1
    i = i**2
    while i < n+1:
        lst[i] = 0
        i += step
    step += 1

for d in range(n//1000):
    gl = d * 1000 + 1
    gr = (d+1) * 1000
    results.append(len(list(filter(lambda x: x>0, lst[gl: gr+1]))))
# results.append(len(lst) - lst.count(0))

print(results)

# https://ru.calculat.io/number/prime/3000--4000 - тут можно проверить
