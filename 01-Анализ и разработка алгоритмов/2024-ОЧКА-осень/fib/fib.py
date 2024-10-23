memo = dict()

def fib(n):
    if n == 0: return 0
    if n == 1: return 1
    if n in memo: return memo[n]
    memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]


n = 80  # 23416728348467685
print(fib(n))
