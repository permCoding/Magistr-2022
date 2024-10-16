a = int(input())
b = int(input())

sm = 0
n = a
while n <= b:
    if n % 2 > 0:
        sm = sm + n
    n = n + 1

print(sm)
