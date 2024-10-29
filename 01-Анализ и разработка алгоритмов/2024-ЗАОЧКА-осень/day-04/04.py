# в 10-ую
def to_dec(b, base=2):  # 12300
    dec = 0
    for i in range(len(b)):
        p = len(b)-1-i
        dec += (ord(b[i])-48)*base**p
    return dec


s = input('Введите число - ')
base = int(input('Введите основание СС - '))
print(to_dec(s, base))
