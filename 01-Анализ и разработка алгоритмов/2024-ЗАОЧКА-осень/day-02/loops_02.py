n = int(input())  # 3

max_t = -float('inf')
i = 0
while i < n:
    t = int(input())
    max_t = max(max_t, t)
    i += 1

print(max_t)
