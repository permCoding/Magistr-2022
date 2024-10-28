n = int(input())  # 3

max_t = -float('inf')
for i in range(0, n):
    max_t = max(max_t, int(input()))

print(max_t)
