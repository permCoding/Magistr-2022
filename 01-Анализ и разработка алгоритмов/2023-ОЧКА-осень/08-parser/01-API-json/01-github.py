import requests, json


user = 'permCoding'
url = f'https://api.github.com/users/{user}/repos'
repsonse = requests.get(url)
repsonse.encoding = "utf8"

lst = repsonse.json()  # ===
# lst = json.loads(repsonse.text)

print(len(lst))
