from utils import clear


def to_bin(dec):
    if dec == 0:
        return ""
    else:
        return str(dec%2) + to_bin(dec//2)


clear()
num = 11
print(to_bin(num))
