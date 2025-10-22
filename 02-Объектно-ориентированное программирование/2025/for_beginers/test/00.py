f = open('./files/01.txt')
lines = f.readlines()
print(lines)

for line in lines:
    if line:
        number = int(line.strip())
        print(number)
