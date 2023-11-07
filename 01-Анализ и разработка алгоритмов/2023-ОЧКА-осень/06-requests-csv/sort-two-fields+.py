a = [
    ('Allo', 2),
    ('Ball', 1),
    ('Car', 2), 
    ('Astro', 3), 
    ('Winny', 2), 
    ('Char', 1),
    ('Wim', 3)
]  

def sorted_(lst, fields, directs):
    for i in fields:
        lst.sort(key = lambda x : x[fields[i]], reverse=directs[i])
    return lst

t = sorted_(a, [0,1], [True, False])

# for row in t: print(*row[::-1])
for row in t: print(f"{row[0].ljust(8, ' ')}{row[1]}")

"""
3 Astro
3 Wim
2 Allo
2 Car
2 Winny
1 Ball
1 Char
"""