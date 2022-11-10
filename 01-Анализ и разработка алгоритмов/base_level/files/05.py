def get_lines(file_name):
    with open(file_name) as file:
        lines = file.readlines()
    lst = []
    for line in lines:
        lst.append(line.strip())
    return lst


file_name = "./txt/01.txt"
lines = get_lines(file_name)
print(lines)
