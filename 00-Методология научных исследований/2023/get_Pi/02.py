from random import random


def get_pi(n=2):
    eps = 1 / 10**n
    count, count_circle = 0, 0
    diff = float('inf')
    last = 0
    while diff > eps:
        x, y = random(), random()
        if x**2 + y**2 <= 1:
            count_circle += 1
        count += 1
        pi = 4*count_circle/count
        diff = abs(last - pi)
        last = pi
        print(last)
        if count > 20: break
    return (count, pi)


n = int(input('Введите кол-во знаков после запятой - '))
print(f"Pi = {get_pi(n)}")
