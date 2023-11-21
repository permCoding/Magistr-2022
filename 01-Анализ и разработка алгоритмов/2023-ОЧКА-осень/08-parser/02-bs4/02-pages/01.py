from bs4 import BeautifulSoup
import json
from time import sleep
from parsing import get_html
from random import randint as rnd


def get_books_on_page(html):  # получить книги на одной странице
    soup = BeautifulSoup(html, 'html.parser')
    prods = soup.find('div', class_='products-list').find_all('article')
    books = ['book'] * len(prods)
    return books


def get_url(page):
        base_url = 'https://www.chitai-gorod.ru'
        cat = '/catalog/books/nauchnaya-fantastika-9693'
        params = f'?sort=price&order=asc&page={page}'
        return base_url + cat + params

   
def get_all_books(count=0):
    all_books = []
    for page in range(1, count+1):
        url = get_url(page)
        print(f'page={page}', url)
        
        try:
            sleep(rnd(1, 3))
            html = get_html(url)
            books = get_books_on_page(html)
            all_books.extend(books)
        except:
            print(f'Ошибки на странице - {page}')
    return all_books
   

all_books = get_all_books(count=2)  # количество страниц
print(len(all_books))

"""
https://www.chitai-gorod.ru
https://www.chitai-gorod.ru/catalog/books/nauchnaya-fantastika-9693?sort=price&order=asc&page=1'
"""