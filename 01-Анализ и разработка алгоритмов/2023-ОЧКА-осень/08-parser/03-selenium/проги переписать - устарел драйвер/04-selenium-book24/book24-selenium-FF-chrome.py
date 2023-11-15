# https://www.selenium.dev/selenium/docs/api/py/
# from urllib.parse import unquote  # это при необходимости unquote('https://pcoding.ru/pdf/%D0%9A.pdf')
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from time import sleep
import json


def get_prods_on_page(page):
    _lst = []
    try:
        prods = browser.find_elements(By.CLASS_NAME, 'product-list__item')
        for prod in prods:
            try:
                price = prod.find_element(By.CLASS_NAME, 'product-card-price__current').text.replace(' ', '').replace('₽', '').strip()
                author = prod.find_element(By.CLASS_NAME, 'product-card__authors-holder').text.strip()
                name = prod.find_element(By.CLASS_NAME, 'product-card__name').text.strip()
                href = prod.find_element(By.CLASS_NAME, 'product-card__name').get_attribute('href')
            except:
                price, author, name, href = '0', '', '', ''
            _lst.append([price, author, name, href])
    except:
        print(f'Ошибки на странице - {page}')
    return _lst


def write_to_json(lst):
    cols = ['id', 'price', 'author', 'name', 'href']
    books = []
    for i, elm in enumerate(lst, start=1):
        vals = [i] + elm
        book = dict(zip(cols, vals))
        books.append(book)

    with open('books.json', 'w', encoding='utf8') as f:
        json.dump(books, f, ensure_ascii=False, indent=4)


def get_all_prods(pages=1):
    base_url = f'https://book24.ru'
    post = '/catalog/fantastika-1649'
    lst = []
    for page in range(1, pages+1):
        params = f'/page-{page}/'
        url = base_url + post + params
        browser.get(url)
        sleep(3.0)
        for _ in range(4):
            browser.execute_script("window.scrollTo(0, window.scrollY + 660)")
            sleep(1.0)
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        sleep(1.0)  # браузер работает асинхронно
        lst.extend(get_prods_on_page(page))
    return lst


# ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'

# options = webdriver.ChromeOptions()
# options.add_argument(f'user-agent={ua}')
# browser = webdriver.Chrome(ChromeDriverManager().install(), options=options)

# options = webdriver.FirefoxOptions()
# options.add_argument(f'user-agent={ua}')
# browser = webdriver.Firefox(options=options)

browser = webdriver.Firefox()
browser.maximize_window()

lst = get_all_prods(pages=3)
write_to_json(lst)

browser.close()


"""
<div data-id="product" class="catalog-product ui-button-widget "

<div class="product-buy__price">999&nbsp;₽</div>

<div class="author-list product-card__authors-holder">
<a href="/author/king-stiven-133692/" class="author-list__item smartLink">
    Стивен Кинг
</a><!----></div>

<a href="/product/dolgaya-progulka-179968/" class="product-card__name smartLink" title="Долгая Прогулка"> Долгая Прогулка </a>
"""