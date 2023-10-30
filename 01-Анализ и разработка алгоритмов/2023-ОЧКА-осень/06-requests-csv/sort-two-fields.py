a = [
    ('Allo', 2),
    ('Ball', 1),
    ('Car', 2), 
    ('Astro', 3), 
    ('Winny', 2), 
    ('Char', 1),
    ('Wim', 3)
]  

t = sorted(
    sorted(a, key = lambda x : x[0]), 
    key = lambda x : x[1], 
    reverse = True
)  

for row in t: print(row)

"""
('Astro', 3)
('Wim', 3)
('Allo', 2)
('Car', 2)
('Winny', 2)
('Ball', 1)
('Char', 1)
"""