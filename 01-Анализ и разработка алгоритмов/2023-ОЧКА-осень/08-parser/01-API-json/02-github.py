import requests, json


user = 'permCoding'
url = f'https://api.github.com/users/{user}/repos'
repsonse = requests.get(url)
repsonse.encoding = "utf8"

lst = repsonse.json()
json_str = json.dumps(lst[0], ensure_ascii=False, indent=4)
print(json_str)
