lst = []

lst += [23]

lst.append(66)

lst_2 = [23,45,67,89]

for elm in lst_2: lst.append(elm)

print(lst)

lst.extend(lst_2)

print(lst)
