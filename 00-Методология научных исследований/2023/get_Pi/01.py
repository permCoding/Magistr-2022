from random import random


def get_pi(count):
    count_circle = 0
    for _ in range(count):
        x, y = random(), random()
        if x**2 + y**2 <= 1:
            count_circle += 1
    return 4*count_circle/count


def get_pi_step(count):
    count_circle = 0
    for step in range(1, count+1):
        x, y = random(), random()
        if x**2 + y**2 <= 1:
            count_circle += 1
        if step%50_000 == 0:
            print(step, 4*count_circle/step)


# n = int(input('Введите кол-во испытаний - '))
# print(f"Pi = {get_pi(n)}")
get_pi_step(1_000_000)

"""
001_000_000 3.14_3148
400_000_000 3.141_58231
600_000_000 3.1415971066666666

"""