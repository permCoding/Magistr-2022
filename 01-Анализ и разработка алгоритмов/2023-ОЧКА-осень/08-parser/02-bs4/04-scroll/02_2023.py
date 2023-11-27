import requests
from fake_useragent import UserAgent
from bs4 import BeautifulSoup
from time import sleep
import random
import json


def get_html(url):
    ua = UserAgent().chrome
    resp = requests.get(url, headers={'User-Agent': ua})
    resp.encoding = 'utf8'
    return resp.text


host = 'https://scrapingclub.com'
url = f'https://scrapingclub.com/exercise/list_infinite_scroll/'
html = get_html(url)
soup = BeautifulSoup(html, 'html.parser')
tags = soup.find('nav', class_='pagination').find_all('span')
count = len(tags)

columns = ['id','price','title','href']
lst = []
for page in range(1, count):
    url = f'https://scrapingclub.com/exercise/list_infinite_scroll/?page={page}'
    html = get_html(url)
    soup = BeautifulSoup(html, 'html.parser')
    cards = soup.find_all('div', class_='w-full rounded border post')
    for card in cards:
        href = card.find('a').get('href')
        title = card.find('div').find('h4').text.strip()
        price = card.find('div').find('h5').text.strip()
        lst.append([price,title,host+href])
    
    print(page, len(cards))  # это для контроля
    sleep(1 + random.random()*3)

res = [dict(zip(columns, [i+1]+e)) for i,e in enumerate(lst)]

print(json.dumps(res, ensure_ascii=False, indent=4))

with open('./cards.json', 'w', encoding='utf8') as f:
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