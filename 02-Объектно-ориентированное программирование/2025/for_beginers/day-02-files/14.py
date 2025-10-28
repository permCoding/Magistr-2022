filename = './files/input.txt'

f = open(filename)

lines = f.readlines()[1:]
numbers = [int(line) for line in lines]

print(numbers)
print(max(numbers))

f.close()
