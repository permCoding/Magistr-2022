import requests
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

params = {
    'curr': 'rub',
    'dest': '12358373',
    'page': '1',
    'query': 'ноутбук',
    'resultset': 'catalog',
    'sort': 'popular',
}

response = requests.get('https://search.wb.ru/exactmatch/ru/common/v4/search', params=params, headers=headers)

products = response.json()["data"]["products"]
# print(json.dumps(products[0], ensure_ascii=False, indent=2))
# print(json.dumps(products, ensure_ascii=False, indent=2))
lst = []
for prod in products: 
    elm = (prod["brand"], int(prod["salePriceU"])/100, prod["name"])
    lst.append( elm )
for prod in sorted(lst, key=lambda x: -x[1]):
    if prod[0] == "Lenovo":
        print(*prod)
