import requests, json


user = 'permCoding'
url = f'https://api.github.com/users/{user}/repos'
repsonse = requests.get(url)
repsonse.encoding = "utf8"

lst = repsonse.json()
repo = lst[0]
print(repo["language"], repo["html_url"])
