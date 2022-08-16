n = 1000000

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

print(len(list(filter(lambda x: x>0, lst)))-1)  # для n = 1000000 => кол-во простых = 78498
