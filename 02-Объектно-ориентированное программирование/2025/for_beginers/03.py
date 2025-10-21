s = 'qwerty'.capitalize()

# i = 0
# while i < len(s):  #length
#     print(i, s[i])
#     i += 1

# print(s[len(s) - 1], s[-1])

i = len(s) - 1
while i >= 0:
    print(i, s[i])
    i -= 1

i = len(s)
while i > 0:
    i -= 1
    print(i, s[i])
