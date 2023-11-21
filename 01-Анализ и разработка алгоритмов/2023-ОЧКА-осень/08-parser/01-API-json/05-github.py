import requests, json


user = 'permCoding'
url = f'https://api.github.com/users/{user}/repos'
repsonse = requests.get(url)
repsonse.encoding = "utf8"

repos = repsonse.json()

keys = ["id", "language", "html_url"]
res_json = []
for id, repo in enumerate(repos, start=1):
    vals = [id, repo[keys[1]], repo[keys[2]]]
    res_json.append(dict(zip(keys, vals)))

json_str = json.dumps(res_json, ensure_ascii=False, indent=4)
print(json_str)

with open("./res_json.json", "w", encoding="utf8") as f:
    json.dump(res_json, f, ensure_ascii=False, indent=4)