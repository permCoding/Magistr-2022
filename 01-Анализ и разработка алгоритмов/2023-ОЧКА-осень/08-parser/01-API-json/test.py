a = {
    "id": 1,
    "name": "Mike"
}
print(a)

dct = dict()
dct["id"] = 1
dct["name"] = "Mike"
print(dct)

keys = ["id", "name"]
vals = [33, "Olya"]
for pair in zip(keys, vals):
    print(pair)

print(dict(zip(keys, vals)))
