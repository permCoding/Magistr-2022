f = open('./files/input.txt')

n = int(f.readline())  # int(input())

mx = 0
for _ in range(n):
    temp = int(f.readline())
    if temp > mx:
        mx = temp
print(mx)
