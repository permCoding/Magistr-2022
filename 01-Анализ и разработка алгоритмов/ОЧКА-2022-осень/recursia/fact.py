import sys


def f_for(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result


def f_rec(n):
    if n == 1: return 1  # точка останова
    return f_rec(n-1) * n  # шаг рекурсии
    # 1*2*3...*n-1  *  n


sys.setrecursionlimit(10000)
# print(len(str(f_for(1000))))
print(f_rec(1800))

# ==> 1000 // 2

# 1    1..500  |  501..1000
# 2   
# 3
# 4


# 1 2 4 8 16 32 64 128 256 512 1024


# 1000 => 10
# 1000000 => 20



