from random import randint


def get_01(n):
    lst = []
    for _ in range(n):
        num = randint(1, 6)
        lst.append(num)  # lst += [num]
    print(lst)


def get_02(n):
    lst = [randint(1, 6) for _ in range(n)]
    # for _ in range(n):
    #     num = randint(1, 6)
    #     lst.append(num)  # lst += [num]
    print(lst.count(6))


def get_03(series_len, amount_exp=10_000):
    lst = [0] * (series_len + 1)
    for _ in range(amount_exp):
        one_ser = [randint(1, 6) for _ in range(series_len)]
        count6 = one_ser.count(6)
        lst[count6] += 1
    print(lst)


get_03(10, 100_000)
