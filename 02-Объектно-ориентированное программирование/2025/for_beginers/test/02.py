def get_lines(filename):
    w = []
    with open(filename, 'r', encoding='utf-8') as file:
        line = file.readline()
        while line:
            number = int(line.strip())
            w.append(number)
            line = file.readline()
    return w

w = get_lines('./files/01.txt')
print(w)
print(sorted(w))
w.sort(key=lambda e: (e%2, e))
print(w)
w.sort(key=lambda e: (e%2==0, e))
print(w)
w.sort(key=lambda e: len(str(e)))
print(w)
w.sort(key=lambda e: (len(str(e)), -e))
print(w)