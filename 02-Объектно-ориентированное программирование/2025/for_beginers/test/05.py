import requests


url = "http://perm.1gb.ru/txt/labrab04-2.txt"
response = requests.get(url)
response.encoding = "utf-8"
text = response.text

lst = text.strip().split('\n')
# print(lst)

for elm in lst:
    print( list(map(int, elm.split(' '))) )