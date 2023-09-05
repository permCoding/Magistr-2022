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
2 2.92
3 3.068
4 3.1136
5 3.13728
6 3.138964
7 3.142892
8 3.14171636
- 3.141592653589793
2 3.36
3 3.092
4 3.128
5 3.14104
6 3.141892
7 3.141732
8 3.1413494
"""