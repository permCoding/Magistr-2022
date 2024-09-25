from random import randint as rnd

def get_lst_1(cnt=100, a=1, b=10**6):
    return sorted(rnd(a, b) for _ in range(cnt))


def get_lst_2(cnt=100, a=1, b=10):
    lst = [1]
    for _ in range(cnt):
        lst += [lst[-1] + rnd(1, 10)] 
    return lst


# print(get_lst_1(10))
lst = get_lst_2(100)

with open('./data.txt', 'w') as f:
    f.write(' '.join(str(num) for num in lst))
