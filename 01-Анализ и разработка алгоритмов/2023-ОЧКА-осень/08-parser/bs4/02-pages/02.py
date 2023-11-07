from bs4 import BeautifulSoup
import json
from time import sleep
from parsing import get_html
from random import randint as rnd


def get_books_on_page(html):  # получить книги на одной странице
    soup = BeautifulSoup(html, 'html.parser')
    prods = soup.find_all('article')
    books = []
    pref = "https://www.chitai-gorod.ru"
    for prod in prods:
        head = prod.find('div', class_="product-title__head").text.strip()
        author = prod.find('div', class_="product-title__author").text.strip()
        price = prod.find('div', class_="product-price__value").text.strip().replace('\xa0','')
        ref = pref + prod.find('a', class_="product-card__row")['href']
        books.append([head,author,price,ref])
    return books

   
def get_all_books(count=0):
    all_books = []
    page = 0
    sleep(rnd(1,5))
    while True:
        page += 1
        if count!=0 and page>count: break
        
        order = 'desc'
        
        base_url = 'https://www.chitai-gorod.ru'
        cat = '/catalog/books/nauchnaya-fantastika-9693'
        # params = f'?page={page}'
        params = f'?sort=price&order={order}&page={page}'
        url = base_url + cat + params
        
        print(f'page={page}', url)
        
        try:
            html = get_html(url)
            lst = get_books_on_page(html)
            all_books.extend(lst)
        except:
            print(f'Ошибки на странице - {page}')
    return all_books

    
def write_to_json(filename, lst):
    def get_dict(i, e):
        name_columns = ['id', 'head', 'author', 'price', 'ref']
        values = [i+1] + e
        return dict(zip(name_columns, values))    

    lst_w = [get_dict(i,e) for i,e in enumerate(lst)]
    with open(filename, 'w', encoding='utf8') as f:
        json.dump(lst_w, f, indent=4, ensure_ascii=False)


all_books = get_all_books(count=2)
write_to_json('all_books.json', all_books)

"""

"""