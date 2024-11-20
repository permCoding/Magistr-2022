def gen_combo(lst):
    amount_combs = 2**len(lst)
    for n in range(amount_combs):
        print(n, '\t', bin(n)[2:].ljust(len(lst), '0')[::-1])


# lst = ['A', 'B', 'C']
lst = [1, 2, 3, 4]
    
gen_combo(lst)  # поиск комбинации
