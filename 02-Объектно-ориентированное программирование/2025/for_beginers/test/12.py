filename = './files/numbers.txt'

counter_even = 0
for line in open(filename):
    if int(line) % 2 == 0:
        counter_even += 1
print(counter_even)