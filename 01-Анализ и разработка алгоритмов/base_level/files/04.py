def get_lines(file_name):
    lines = []
    with open(file_name) as file:
        while True:            
            line = file.readline()
            if not line: break
            lines.append(line.strip())
    return lines


file_name = "./txt/01.txt"
lines = get_lines(file_name)
print(lines)
