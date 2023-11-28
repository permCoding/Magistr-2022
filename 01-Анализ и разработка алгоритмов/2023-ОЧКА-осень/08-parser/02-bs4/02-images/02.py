import requests
from fake_useragent import UserAgent
from bs4 import BeautifulSoup
import shutil


def get_html(url):
    ua = UserAgent().chrome
    head = {'User-Agent': ua}
    resp = requests.get(url, headers=head)
    resp.encoding = "utf8"
    return resp.text


def get_links_on_page(html):  # получить все ссылки на странице
    soup = BeautifulSoup(html, 'html.parser')
    arts = soup \
        .find('div', class_='products-list') \
        .find_all('article')
    links = []
    for item in arts:
        link = item \
            .find('a') \
            .find('picture', {'class':'product-picture'}) \
            .find('img')['data-src']
        links.append(link)
    return links


def save_to_file(url, folder='./'):
    resp = requests.get(url, stream=True)
    filename = url.split('/')[-1]
    with open(folder+filename, 'wb') as f:
        shutil.copyfileobj(resp.raw, f)


host, cat = 'https://www.chitai-gorod.ru/', 'catalog/books/informatika-110299'
url = host + cat
html = get_html(url)
links = get_links_on_page(html)

for link in links:
    save_to_file(link, './images/')
