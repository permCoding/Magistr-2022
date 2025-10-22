f = open('./files/input.txt')

n = int(f.readline())  # int(input())

lst = []
for _ in range(n):
    lst += [int(f.readline())]

print(max(lst))
