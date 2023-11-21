import requests as req
from bs4 import BeautifulSoup
from time import sleep
from random import randint as rnd
import json


def get_html(sess, url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0'
    }
    sess.headers.update(headers)
    resp = sess.get(url)
    resp.encoding = 'utf8'
    return resp.text

host = 'https://scrapingclub.com'
sess = req.Session()

url = f'https://scrapingclub.com/exercise/list_infinite_scroll/'
html = get_html(sess, url)
soup = BeautifulSoup(html, 'html.parser')
count = len(soup.find('ul', class_='pagination invisible').find_all('li'))
# print(count)
columns = ['id','price','title','href']
lst = []
for page in range(1, count):
    print(page)
    url = f'https://scrapingclub.com/exercise/list_infinite_scroll/?page={page}'
    html = get_html(sess, url)
    soup = BeautifulSoup(html, 'html.parser')
    cards = soup.find_all('div', class_='col-lg-4 col-md-6 mb-4')
    # print(len(cards))
    for card in cards:
        tag = card.find('div', class_='card')
        title = tag.find('h4', class_='card-title').text.strip()
        price = tag.find('h5').text.strip()
        href = tag.find('h4', class_='card-title').find('a').get('href')
        lst.append([price,title,host+href])
    sleep(rnd(2,4))
res = []
for i, e in enumerate(lst):
    res.append(dict(zip(columns, [i+1] + e)))
# s = json.dumps(res, ensure_ascii=False, indent=4)
# print(s)
with open('cards.json', 'w', encoding='utf8') as f:
    json.dump(res, f, ensure_ascii=False, indent=4)

"""
<div class="col-lg-4 col-md-6 mb-4">
    <div class="card">

        <a href="/exercise/list_detail_infinite_scroll/91696-C/">
            <img class="card-img-top img-fluid" src="/static/img/91696-C.jpg" alt="">
        </a>

        <div class="card-body">
            <h4 class="card-title">
                <a href="/exercise/list_detail_infinite_scroll/91696-C/">V-neck Jumpsuit</a>
            </h4>
            <h5>$69.99</h5>
        </div>

    </div>
</div>

<nav aria-label="Page navigation example">
<ul class="pagination invisible">
    <li class="page-item active">
        <span class="page-link">
            1
            <span class="sr-only">(current)</span>
        </span>
    </li>
    <li class="page-item"><a class="page-link" href="?page=2">2</a></li>
    <li class="page-item"><a class="page-link" href="?page=3">3</a></li>
    <li class="page-item"><a class="page-link" href="?page=4">4</a></li>
    <li class="page-item"><a class="page-link" href="?page=5">5</a></li>
    <li class="page-item"><a class="page-link" href="?page=6">6</a></li>
    <li class="page-item"><a class="page-link" href="?page=7">7</a></li>
    <li class="page-item"><a class="page-link next-page" href="?page=2">Next</a></li>
</ul>

"""