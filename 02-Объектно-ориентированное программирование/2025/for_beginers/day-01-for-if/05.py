s = '01234-'

# for char in s:
#     print(char)

for i in range(0, len(s), 1):  # не включая правую 
    print(i, s[i])

for i in range(len(s)):
    print(i, s[i])

for i in range(len(s)-1, -1, -1):
    print(i, s[i])

for i in 0,1,222,3,4:
    print(i)

print(range(10))  # 0,1,2,3,4,5,6,7,8,9
print(list(range(10)))  # [0,1,2,3,4,5,6,7,8,9]
for i in range(2, 5):  # 2,3,4
    print(i)


# range(2, 5)
# range(3, 12, 3)