# https://www.selenium.dev/selenium/docs/api/py/
# from urllib.parse import unquote  # это при необходимости unquote('https://pcoding.ru/pdf/%D0%9A.pdf')
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import json
from time import sleep  # можно добавить задержку


def get_prod(prod):
    title = prod.find_element(By.CLASS_NAME, 'catalog-product__name').text.strip()
    href = prod.find_element(By.TAG_NAME, 'a').get_attribute('href')
    # price = prod.find_element(By.CLASS_NAME, 'product-buy').text.strip().split('\n')[0]
    price = prod.find_element(By.CLASS_NAME, 'product-buy__price').text.strip()
    stores = prod.find_element(By.CLASS_NAME, 'order-avail-wrap').text.strip()
    cols = ['title', 'href', 'price', 'stores']
    vals = [title, href, price, stores]
    return dict(zip(cols, vals))


def get_prods():
    tags = browser.find_elements(By.CLASS_NAME, 'catalog-product')
    return [get_prod(prod) for prod in tags]


def get_url(page):
    base_url = 'https://www.dns-shop.ru/'
    cat = 'catalog/8a9ddfba20724e77/ssd-nakopiteli/'
    params = f'?stock=now-today&p={page}'
    return base_url + cat + params
    

def window_scroll():
    browser.maximize_window()
    sleep(3.0)
    for _ in range(5):
        browser.execute_script("window.scrollTo(0, window.scrollY + 500)")
        sleep(.5)
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")


def get_pages(count=1):
    lst = []
    for page in range(count):
        url = get_url(page+1)
        browser.get(url)
        window_scroll()
        prods = get_prods()
        lst.extend(prods)
    return lst


def save_to_json(filename, all_prods):
    with open(filename, 'w', encoding='utf8') as f:
        json.dump(all_prods, f, ensure_ascii=False, indent=4)


# browser = webdriver.Firefox()
browser = webdriver.Chrome(ChromeDriverManager().install())

all_prods = get_pages(3)
save_to_json('prods.json', all_prods)

browser.close()
# browser.quit()


"""
<div data-id="product" class="catalog-product ui-button-widget "
<div class="product-buy__price">999&nbsp;₽</div>
"""