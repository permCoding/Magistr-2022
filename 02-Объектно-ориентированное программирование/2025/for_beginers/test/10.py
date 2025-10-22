print(ord('\n'))
s = '0123\n456\n'
print(s)
for ch in s:
    print(ch, ord(ch), sep='-')
print(chr(48))
print(ord('А'))
s = ''
for num in range(1040, 1040+32):
    s += chr(num)
print(s)