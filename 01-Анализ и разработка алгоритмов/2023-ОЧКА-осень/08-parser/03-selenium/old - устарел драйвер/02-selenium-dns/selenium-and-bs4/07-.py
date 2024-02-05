# https://www.selenium.dev/selenium/docs/api/py/
# from urllib.parse import unquote  # это при необходимости unquote('https://pcoding.ru/pdf/%D0%9A.pdf')
from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from time import sleep

# сначала популярные: post = ?order=6&stock=now-today

def get_prod(prod):
    title = prod.find_element(By.CLASS_NAME, 'catalog-product__name').text.strip()
    href = prod.find_element(By.TAG_NAME, 'a').get_attribute('href')
    price = prod.find_element(By.CLASS_NAME, 'product-buy__price').text.strip()
    try:
        stores = prod.find_element(By.CLASS_NAME, 'order-avail-wrap').text.strip()
    except:
        stores = "..."
    cols = ['title', 'href', 'price', 'stores']
    vals = [title, href, price, stores]
    return dict(zip(cols, vals))


browser = webdriver.Firefox()
base_url, url = 'https://www.dns-shop.ru', '/catalog/8a9ddfba20724e77/ssd-nakopiteli/'

cols = ['id', 'title', 'href', 'price', 'stores']
lst, count = [], 3
for page in range(1, count+1):
    print(f'page={page}')  # для контроля
    post = f'?order=6&stock=now-today&p={page}'
    
    browser.get(base_url + url + post)
    sleep(6)  # браузер работает асинхронно
    
    prods = browser.find_elements(By.CLASS_NAME, 'catalog-product')
    lst.extend([get_prod(prod) for prod in prods])

with open('prods.json', 'w', encoding='utf8') as f:
    json.dump(lst, f, ensure_ascii=False, indent=4)

browser.quit()

"""
<div data-id="product" class="catalog-product ui-button-widget "

<div class="product-buy__price">999&nbsp;₽</div>

"""