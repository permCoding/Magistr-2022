import os


def ex01():
    # Битовый оператор ~ НЕТ - инверсия
    a = 0b1001 # a = 9 в десятичной системе
    b = ~a # b = -10 - десятичная система
    c = bin(b) # c = -0b1010 - двоичная система
    print(c)

    a = -0b1001 # a = -9 в десятичной системе
    b = ~a # b = 8 - десятичная система
    c = bin(b) # c = 0b1000 - двоичная система
    print(c)
    
    a = 0b1111 # a = 15
    b = ~a # b = -16
    c = bin(b) # c = -0b10000
    print(c)
    
    a = -0b1111 # a = -15
    b = ~a # b = 14
    c = bin(b) # c = 0b1110
    print(c)
    

def ex02():
    dec = 1
    dop = ~dec+1
    print(bin(dec))
    print(bin(dop))

    print(~dec)
    print(dop)
    print(dop+1)


os.system('clear')  # для Win -> cls
ex01()
