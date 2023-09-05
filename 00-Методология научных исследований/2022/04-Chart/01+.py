import math


def f(x):
    # return 9.5 * x**3 - 500
    return 9.5 * math.pow(x, 3) - 500


a, b = -5, 5
while True:
    middle = a + (b-a) / 2
    y = f(middle)
    if abs(y) < .001:
        print(middle)
        print(f(middle))
        break
    if y > 0:
        b = middle
    else:
        a = middle
