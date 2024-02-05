import json


f = open("./tiobe.json")
obj = json.load(f)
f.close()

print(json.dumps(obj, ensure_ascii=True, indent=4))

f = open("./tiobe_.json", "w")
json.dump(obj, f, ensure_ascii=True, indent=2)
f.close()
