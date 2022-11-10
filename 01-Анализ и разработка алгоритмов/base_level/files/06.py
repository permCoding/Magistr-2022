def get_lines(file_name):
    with open(file_name) as file:
        lines = file.readlines()
    return [line.strip() for line in lines]


file_name = "./txt/01.txt"
lines = get_lines(file_name)
print(lines)
