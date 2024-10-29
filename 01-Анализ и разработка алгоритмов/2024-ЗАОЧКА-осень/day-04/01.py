def ex_01(lst):
    for i in range(len(lst)):
        print(lst[i], type(lst[i]))
        if type(lst[i]) == int:
            break


def ex_02(lst):
    for elm in lst:
        print(elm, type(elm))
        if type(elm) == int:
            break


def ex_03(lst):
    sm = 0
    for elm in lst:
        if type(elm) != int:
            continue
        sm += elm
    return sm


lst = [99, True, 'str', 1.2, 23, 34]
res = ex_03(lst)
print(res)
