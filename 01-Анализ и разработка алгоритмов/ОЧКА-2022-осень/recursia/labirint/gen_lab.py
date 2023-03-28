from random import randint as r


rx, ry = 10, 10
rm = int(min(rx, ry)**.5)
lst = []
for y in range(ry):
    row = [str(r(1, rm)) for _ in range(rx)]
    lst.append(row)
for i in range((rx+ry)//2):
    x, y = r(0, rx//2), r(0, ry//2)
    v = r(2, (rx+ry)//2)
    lst[y][x] = str(v)
lines = [','.join(row)+'\n' for row in lst]

with open('./labirint.txt','w') as f:
    f.writelines(lines)
