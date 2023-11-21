import requests, json


user = 'permCoding'
url = f'https://api.github.com/users/{user}/repos'
repsonse = requests.get(url)
repsonse.encoding = "utf8"

lst = repsonse.json()

keys = ["id", "language", "html_url"]
result = []
for id, repo in enumerate(lst, start=1):
    values = [id, repo[keys[0]], repo[keys[1]]]
    result.append(dict(zip(keys, values)))

json_str = json.dumps(result, ensure_ascii=False, indent=4)
print(json_str)

with open("./result.json", "w", encoding="utf8") as f:
    json.dump(result, f, ensure_ascii=False, indent=4)