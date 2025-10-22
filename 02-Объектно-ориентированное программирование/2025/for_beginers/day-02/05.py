import math

r = float(input("введите радиус круга - "))
s = math.pi * r ** 2
print("площадь круга =", s)
print(f"площадь круга = {s}")
print(f"площадь круга = {s:.2f}")
print(len(str(s)) - 2)
