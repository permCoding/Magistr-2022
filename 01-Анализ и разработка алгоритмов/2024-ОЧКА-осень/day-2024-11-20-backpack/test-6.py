def gen_combs(lst):
    amount_combs = 2**len(lst)
    for n in range(amount_combs):
        print(n, '\t', bin(n)[2:].rjust(len(lst), '0'))


# lst = ['A', 'B', 'C']
lst = [1, 2, 3, 4]

gen_combs(lst)  # поиск комбинации
