import time

start = time.monotonic()

lst = []

i = 102345678
while len(lst) == 0:
    if len(set(str(i))) == len(str(i)):
        if i % 11 == 0:
            lst.append(i)
            break
    i += 1

while i <= 987654321:
    i += 11
    if len(set(str(i))) == len(str(i)):
        lst.append(i)

print("len(lst) =", len(lst))
print(lst[0], lst[-1])

finish = time.monotonic()
result = finish - start
print(round(result,2), "сек")
