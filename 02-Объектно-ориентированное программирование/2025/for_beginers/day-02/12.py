filename = './files/input.txt'

f = open(filename)

line = f.readline().strip()

for ch in line:
    print(ch, ord(ch))

f.close()
