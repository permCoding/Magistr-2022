# числа Фибоначчи
# мес 1 2 3 4 5 6 7 8 9
# пар 1 1 2 3 5 8 13 

def fib(n):
    if n < 3: return 1
    return fib(n-2) + fib(n-1)


# for i in range(30, 40):
#     print(f"{i}\t{fib(i)}")


def fib_cash(n):
    if n < 3: return 1
    if lst[n-1] == 0:
        lst[n-1] = fib_cash(n-1)
    if lst[n-2] == 0:
        lst[n-2] = fib_cash(n-2)
    return lst[n-2] + lst[n-1]



lst = [0,1,1] + [0] * 10000
print(fib_cash(1000))
