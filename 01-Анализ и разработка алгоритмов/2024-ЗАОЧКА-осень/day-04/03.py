# из 2-ой в 10-ую
def bin_to_dec(b):  # 11001
    dec = 0
    p = len(b)
    for smb in b:
        p -= 1
        if smb  == '1':
           dec += 2**p
    return dec


b = input('Введите двоичное число - ')
print(bin_to_dec(b))
