import requests  # pip install requests
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

params = {
    'TestGroup': 'pi_100',
    'TestID': '348',
    'appType': '1',
    'curr': 'rub',
    'dest': '-1257786',
    'query': 'смартфон',
    'resultset': 'catalog',
    'sort': 'popular',
    'spp': '25',
    'suppressSpellcheck': 'false',
}

response = requests.get('https://search.wb.ru/exactmatch/ru/common/v4/search', params=params, headers=headers)
response.encoding = "utf8"
obj = response.json()

print(obj)
