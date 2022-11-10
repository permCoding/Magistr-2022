def get_lines(file_name):
    with open(file_name) as file:
        lines = file.readlines()
    return [line.strip() for line in lines]


def get_sum(line):
    lst = line.split(" ")
    nums = [int(s) for s in lst]
    return sum(nums)


def get_sum_even(line):
    lst = line.split(" ")
    nums = [int(s) for s in lst if int(s)%2 == 0]
    return sum(nums)


file_name = "./txt/01.txt"
lines = get_lines(file_name)

print(get_sum(lines[0]))
print(get_sum_even(lines[0]))

x = 12  # присваивание
x == 12  # сравнение
