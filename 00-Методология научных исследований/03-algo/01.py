# L = 2 * Pi * R
# Pi = 4 * (S0/S1)

from random import random as r
import math


for p in range(2, 8):
    n = 10 ** p
    count = 0
    for i in range(n):
        x, y = r(), r()
        g = x**2 + y**2
        if g < 1:
            count += 1
    Pi = 4 * count / n
    print(p, Pi)

print(math.pi)

lst = []
