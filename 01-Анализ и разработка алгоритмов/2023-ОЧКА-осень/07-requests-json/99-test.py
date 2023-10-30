a = [
    ('Al', 2),
    ('Bill', 1),
    ('Carol', 2), 
    ('Abel', 3), 
    ('Zeke', 2), 
    ('Chris', 1),
    ('Zack', 3)
]  

t = sorted(
    sorted(a, key = lambda x : len(x[0])), 
    key = lambda x : x[1], 
    reverse = True
)  

for row in t:
    print(row)

# [('Abel', 3), ('Al', 2), ('Carol', 2), ('Zeke', 2), ('Bill', 1), ('Chris', 1)]
