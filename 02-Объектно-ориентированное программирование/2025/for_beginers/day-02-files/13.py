filename = './files/input.txt'

f = open(filename)

lines = f.readlines()

for line in lines:
    print(line.strip())

f.close()
