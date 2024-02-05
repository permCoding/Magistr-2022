import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

response = requests.get('https://www.wildberries.ru/catalog/85918366/detail.aspx?targetUrl=SP', headers=headers)
response.encoding = "utf8"
html = response.text

print(html)
