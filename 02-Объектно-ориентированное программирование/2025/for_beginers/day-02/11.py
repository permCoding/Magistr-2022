f = open('./files/input.txt')

n = int(f.readline())

lst = [int(f.readline()) for _ in range(n)]

print(lst)

print(max(lst))
