f = open('./files/input.txt')

n = int(f.readline())  # int(input())

lst = []
for _ in range(n):
    temp = int(f.readline())
    lst.append(temp)

print(lst)
print(max(lst))
