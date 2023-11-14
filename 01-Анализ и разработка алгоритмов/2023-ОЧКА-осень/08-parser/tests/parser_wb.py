import requests
import json

headers = {
    'Accept': '*/*',
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'Connection': 'keep-alive',
    'Origin': 'https://www.wildberries.ru',
    'Referer': 'https://www.wildberries.ru/catalog/0/search.aspx?page=2&sort=popular&search=%D0%BF%D0%B0%D1%8F%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
    'x-userid': '107167966',
}

params = {
    'TestGroup': 'no_test',
    'TestID': 'no_test',
    'appType': '1',
    'curr': 'rub',
    'dest': '12358373',
    'page': '2',
    'query': 'паяльник',
    'resultset': 'catalog',
    'sort': 'popular',
    'spp': '29',
    'suppressSpellcheck': 'false',
    'uclusters': '1',
}

response = requests.get('https://search.wb.ru/exactmatch/ru/common/v4/search', params=params, headers=headers)

products = response.json()["data"]["products"]
# print(json.dumps(products[0], ensure_ascii=False, indent=2))
# print(json.dumps(products, ensure_ascii=False, indent=2))
for prod in products: print(prod["brand"])