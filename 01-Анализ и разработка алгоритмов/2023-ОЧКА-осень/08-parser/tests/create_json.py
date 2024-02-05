import json

f = open("./sitemap.json")
data = json.load(f)

# print(data.get("startUrl"))
# print(data["startUrl"])

for selector in data["selectors"]:
    print(selector["id"])
    # print(json.dumps(selector, ensure_ascii=True, indent=4))

# string = json.dumps(data, ensure_ascii=False, indent=2)
# print(string)
# w = open("./sitemap_.json", 'w', encoding="utf8")
# json.dump(data, w, ensure_ascii=True, indent=4)