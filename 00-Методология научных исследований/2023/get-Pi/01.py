from random import random


def get_pi(count):
    count_circle = 0
    for _ in range(count):
        x, y = random(), random()
        if x**2 + y**2 <= 1:
            count_circle += 1
    return 4*count_circle/count


# def get_pi(eps=.001):
    # while diff > eps:
    #     next
    # return result


n = int(input('Введите кол-во испытаний - '))
print(f"Pi = {get_pi(n)}")
