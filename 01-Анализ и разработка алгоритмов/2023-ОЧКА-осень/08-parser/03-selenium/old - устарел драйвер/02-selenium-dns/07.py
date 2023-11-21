# https://www.selenium.dev/selenium/docs/api/py/
# from urllib.parse import unquote  # это при необходимости unquote('https://pcoding.ru/pdf/%D0%9A.pdf')
from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from time import sleep  # можно добавить задержку


def get_prod(i, prod):
    title = prod.find_element(By.CLASS_NAME, 'catalog-product__name').text.strip()
    href = prod.find_element(By.TAG_NAME, 'a').get_attribute('href')
    # price = prod.find_element(By.CLASS_NAME, 'product-buy').text.strip().split('\n')[0]
    price = prod.find_element(By.CLASS_NAME, 'product-buy__price').text.strip()
    stores = prod.find_element(By.CLASS_NAME, 'order-avail-wrap').text.strip()
    cols = ['id', 'title', 'href', 'price', 'stores']
    vals = [i+1, title, href, price, stores]
    return dict(zip(cols, vals))


browser = webdriver.Firefox()

base_url = 'https://www.dns-shop.ru/'
cat = 'catalog/8a9ddfba20724e77/ssd-nakopiteli/'
page = 2
params = f'?stock=now-today&p={page}'
url = base_url + cat + params

browser.get(url)
sleep(5)  # чтобы прогрузились все теги
    
prods = browser.find_elements(By.CLASS_NAME, 'catalog-product')
lst = [get_prod(i, prod) for i, prod in enumerate(prods)]

with open('prods.json', 'w', encoding='utf8') as f:
    json.dump(lst, f, ensure_ascii=False, indent=4)

browser.quit()

"""
<div data-id="product" class="catalog-product ui-button-widget "

<div class="product-buy__price">999&nbsp;₽</div>

"""