import requests  # pip install requests
from fake_useragent import UserAgent  # pip install fake_useragent
from bs4 import BeautifulSoup  # pip install bs4
# import json  # это для сохранения в json-файл
from time import sleep
from random import random


def get_html(url):
    ua = UserAgent().chrome
    head = {'User-Agent': ua}
    resp = requests.get(url, headers=head)
    resp.encoding = "utf8"
    return resp.text


def get_books_on_page(html):  # получить теги на одной странице
    soup = BeautifulSoup(html, 'html.parser')
    prods = soup.find('div', class_='products-list').find_all('article')
    books = [('title','price','avtor','ref')] * len(prods)  # тут просто заглушка
    # собственно тут и следует добавить парсинг книг
    # собрать данные (название, цена, автор, ссылка)
    return books


def get_next_url(page):
    host = 'https://www.chitai-gorod.ru'
    cat = '/catalog/books/nauchnaya-fantastika-9693'
    params = f'?sort=price&order=asc&page={page}'
    return host + cat + params

   
def get_all_books(count_pages=0):
    all_books = []
    for page in range(1, count_pages+1):
        url = get_next_url(page)
        print(f'page={page}', url)  # это для контроля
        
        try:
            pause = 1 + random()*3
            print(pause)
            sleep(pause)  # анти бан для нашего бота
            html = get_html(url)
            books = get_books_on_page(html)
            all_books.extend(books)
        except:
            print(f'Ошибки на странице - {page}')
    
    return all_books
   

all_books = get_all_books(count_pages=3)  # количество страниц
print(len(all_books))  # а это заменить на сохранение в json-файл
for book in all_books: print(book)

"""
формат ссылки:
https://www.chitai-gorod.ru/catalog/books/nauchnaya-fantastika-9693?sort=price&order=asc&page=1'
"""
