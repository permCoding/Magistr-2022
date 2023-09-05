# L = 2 * Pi * R
# Pi = 4 * (S0/S1)

from random import random as r
import math


for p in range(2, 9):
    n = 10 ** p
    count = 0
    for i in range(n):
        x, y = r(), r()
        g = x**2 + y**2
        if g <= 1:
            count += 1
    Pi = 4 * count / n
    print(p, Pi)

print('-', math.pi)

"""
2 3.2
3 3.172
4 3.1652
5 3.14844
6 3.142756
7 3.1411644
8 3.14166688
- 3.141592653589793
"""