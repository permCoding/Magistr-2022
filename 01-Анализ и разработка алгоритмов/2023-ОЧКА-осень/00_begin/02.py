dec = 12

print(bin(dec)[2:])  # 1100
print(oct(dec)[2:])  # 14
print(hex(dec)[2:])  # c

b = "100"  # F*16**1 + F*16**0
dec = int(b, 16)

print(dec)

# 0123456789ABCDEF