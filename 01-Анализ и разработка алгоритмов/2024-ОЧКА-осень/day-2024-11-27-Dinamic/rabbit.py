def get_rec(k, n):
    if n < 0: return 0
    if n < 1: return 1
    sm = 0
    for i in range(1, k+1):
        sm += get_rec(k, n-i)
    return sm


def get_rec_cash(k, n):
    def _rec_cash(k, n):
        if n < 0: return 0
        if n < 1: return 1
        sm = 0
        for i in range(1, k+1):
            if tab[n-i] == 0: 
                tab[n-i] = _rec_cash(k, n-i)
            sm += tab[n-i]
        return sm
    
    tab = [1] + [0] * n
    return _rec_cash(k, n)


def get_lru_cash(k, n):
    from functools import lru_cache
    
    @lru_cache  # Decorator to function with a memoizing
    def _get(k, n):
        if n < 0: return 0
        if n < 1: return 1
        sm = 0
        for i in range(1, k+1):
            sm += _get(k, n-i)
        return sm

    return _get(k, n)


def get_queue(k, n):
    import queue

    amount = 0
    q = queue.Queue()
    q.put(0)
    
    while not q.empty():
        t = q.get()
        if t == n: amount += 1
        for i in range(1, k+1):            
            if t+i <= n:
                q.put(t+i)

    return amount


def get_dinamic(k, n):
    dp = [1] + [0] * (n + k)
    for pos in range(n):
        for i in range(1, k+1):
            dp[pos+i] += dp[pos]
    return dp[n]


# s = '3 4'  # 7
# s = '2 7'  # 21
# s = '3 10'  # 274
s = '5 20'  # 400096
# s = input()
k, n = map(int, s.split())

print(get_rec(k, n))
print(get_rec_cash(k,n))
print(get_lru_cash(k,n))
print(get_queue(k,n))
print(get_dinamic(k,n))

"""
Кролик стоит перед лестницей на земле.
Кролик может прыгать по лесенке вверх, перепрыгивая через ступеньки. 
Лестница имеет определенное количество ступенек N. 
Кролик может одним прыжком преодолеть не более К ступенек. 

Требуется вычислить количество различных способов добраться до вершины лестницы при заданных значениях K и N. 

Например, если K=3 и N=4, то существуют следующие маршруты:  
- 1+1+1+1, 
- 1+1+2, 
- 1+2+1, 
- 2+1+1, 
- 2+2, 
- 1+3, 
- 3+1. 
Таким образом, при данных значениях N и K всего существует 7 различных маршрутов добраться до вершины лестницы.  

Входные данные  
В единственной строке на вход подаются через пробел два натуральных числа K и N (1 ≤ K ≤ N ≤ 300). К - максимальное количество ступенек, которое может преодолеть заяц одним прыжком, N – общее число ступенек лестницы.  

Выходные данные
В единственную строку на выход нужно вывести количество возможных вариантов различных маршрутов на верхнюю ступеньку лестницы без.
"""