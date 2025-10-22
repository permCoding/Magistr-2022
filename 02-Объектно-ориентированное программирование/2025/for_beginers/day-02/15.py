filename = './files/input.txt'

with open(filename) as f:
    lines = f.readlines()[1:]
    print(max([int(line) for line in lines]))
