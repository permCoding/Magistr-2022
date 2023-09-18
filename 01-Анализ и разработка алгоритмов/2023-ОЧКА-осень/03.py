a, mask = 13, 4
print(a & mask)  # И
print((a & mask) > 0)
print(a | mask)  # ИЛИ
print(a ^ mask)  # XOR

x = 2
y = ~x
print(x, y)

x = 1  # 0001
y = x << 1  # 0010
print(x, y)

x = 5  # 0101
y = x << 3  # 1010
print(x, y)

x = 40  # 101000
y = x >> 1
print(x, y)

x = 15  # 1111
y = x >> 2  # 0011
print(x, y)


# 0010
# 1101 + 1
# 1110 + 1
# 1111 + 1
# 0000


#      8421
# 13 = 1101
#  4 = 0100
#      1001 XOR
#      1111 ИЛИ
#      0010 И

# X Y & | ^
# 0 0 0 0 0
# 0 1 0 1 1
# 1 0 0 1 1
# 1 1 1 1 0

# ~1 0
# ~0 1

# &

# |

# ^
