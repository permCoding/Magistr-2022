import requests

url = "https://pcoding.ru/csv/17.txt"

response = requests.get(url)
response.encoding = "utf8"
lst = response.text.split('\n')

for row in sorted(lst, key=lambda x: x.split(';')[1]):
    print(row)
