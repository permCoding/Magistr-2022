# https://www.selenium.dev/selenium/docs/api/py/
# from urllib.parse import unquote  # это при необходимости unquote('https://pcoding.ru/pdf/%D0%9A.pdf')
from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from bs4 import BeautifulSoup
# bs4 не всегда поможет - иногда части страницы не успевают прогрузиться
from time import sleep  # можно добавить задержку

# сначала популярные: post = ?order=6&stock=now-today

def get_prod(prod):  # парсим библиотекой bs4
    tag_a = prod.find('a', class_='catalog-product__name')
    title, href = tag_a.text.strip(), base_url + tag_a.get('href')
    price = prod.find('div', class_='product-buy__price').text.replace('₽', '').strip()
    stores = prod.find('div', class_="order-avail-wrap").text.strip()
    cols = ['title', 'href', 'price', 'stores']
    vals = [title, href, price, stores]
    return dict(zip(cols, vals))


browser = webdriver.Firefox()
base_url, url = 'https://www.dns-shop.ru', '/catalog/8a9ddfba20724e77/ssd-nakopiteli/'

lst, count = [], 5
for page in range(1, count+1):
    print(f'page-{page}')
    post = f'?order=6&stock=now-today&p={page}'
    
    browser.get(base_url + url + post)
    sleep(6)  # чтобы прогрузились все теги
    
    html = browser.find_element(By.CLASS_NAME, 'products-list').get_attribute('innerHTML')
    soup = BeautifulSoup(html, 'html.parser')
    prods = soup.find_all('div', class_='catalog-product')
    
    lst.extend([get_prod(prod) for prod in prods])

with open('prods.json', 'w', encoding='utf8') as f:
    json.dump(lst, f, ensure_ascii=False, indent=4)

browser.quit()

"""
<div class="order-avail-wrap">
<span class="available">В наличии: </span>
<a class="order-avail-wrap__link ui-link ui-link_blue" tabindex="0" role="button" data-role="show-avails-modal" data-url="https://avails.dns-shop.ru/v1/get-modal-avails" data-modal-id="am-7af3f8b6a36aa895f31da16339b045ac" data-products="[{&quot;id&quot;:&quot;bdf0436e-70ca-11eb-a221-00155d03332b&quot;}]" data-mobile-text="в 2 магазинах">
<span>в 2 магазинах</span>
</a>
</div>

<span id="as-eWouvA" class="catalog-product__avails avails-container">
<div class="order-avail-wrap"><span class="available">В наличии: </span><a class="order-avail-wrap__link ui-link ui-link_blue" tabindex="0" role="button" data-role="show-avails-modal" data-url="https://avails.dns-shop.ru/v1/get-modal-avails" data-modal-id="am-1b07ac752a406f6d8251f8f759ea5d7d" data-products="[{&quot;id&quot;:&quot;ef0cfdcd-1950-11ed-9000-00155d8ed20c&quot;}]" data-mobile-text="в 10 магазинах"><span>в 10 магазинах</span></a></div><div class="order-avail-wrap order-avail-wrap_postamat"><span class="available">Пункты выдачи: </span><a class="order-avail-wrap__link ui-link ui-link_blue" data-role="show-avails-modal-postamats" data-url="https://avails.dns-shop.ru/v1/get-modal-avails" data-modal-id="am-1b07ac752a406f6d8251f8f759ea5d7d-p" data-products="[{&quot;id&quot;:&quot;ef0cfdcd-1950-11ed-9000-00155d8ed20c&quot;}]"><span>доступны</span></a></div><div class="delivery-info-widget inited" data-role="delivery-info-widget" data-product-guid="ef0cfdcd-1950-11ed-9000-00155d8ed20c" data-product-name="240 ГБ 2.5&quot; SATA накопитель MSI SPATIUM S270 [S78-440N070-P83]" data-is-kz="" data-city-name="Пермь" data-get-coordinates-url="/delivery/get-current-city-coordinates/" data-get-dates-url="/delivery/get-delivery-dates/" data-get-cart-url="https://www.dns-shop.ru/cart/" data-type-id="1"><span class="delivery-info-widget__text">Доставим на дом: </span><a class="delivery-info-widget__button ui-link ui-link_blue">Послезавтра</a></div></span>
"""