import time, os

start = time.monotonic()

count = 400000

lst = []
for i in range(102345678, 987654321):
    if len(set(str(i))) == len(str(i)):
        if i % 11 == 0:
            lst.append(i)
            if len(lst) == count:
                break

print("count =", count)
print("len(lst) =", len(lst))
print(lst[0], lst[-1])

finish = time.monotonic()
result = finish - start
print(round(result,2), "сек")

print("- далее просто первый и последний -")

for i in range(102345678, 987654321):
    if len(set(str(i))) == len(str(i)):
        if i % 11 == 0:
            print(i)
            break
for i in range(987654321, 102345678-1, -1):
    if len(set(str(i))) == len(str(i)):
        if i % 11 == 0:
            print(i)
            break
