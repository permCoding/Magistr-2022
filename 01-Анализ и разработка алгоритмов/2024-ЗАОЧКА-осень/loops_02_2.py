n = int(input())  # 3

max_t = -float('inf')
i = 0
while i < n:
    max_t = max(max_t, int(input()))
    i += 1

print(max_t)
