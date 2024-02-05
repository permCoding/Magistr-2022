import requests, json


user = 'permCoding'
url = f'https://api.github.com/users/{user}/repos'
repsonse = requests.get(url)
repsonse.encoding = "utf8"

lst = repsonse.json()
repo = lst[0]
try:
    print(repo["language"], repo["html_url"], repo["owner"]["login"])
except:
    print("не все поля были найдены")
finally:
    print("the end")