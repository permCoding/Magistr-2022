import requests  # pip install requests
from fake_useragent import UserAgent  # pip install fake_useragent
from bs4 import BeautifulSoup  # pip install bs4


def get_html(url):
    # ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0'
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
    for art in arts:
        link = art \
            .find('a') \
            .find('picture', {'class':'product-picture'}) \
            .find('img').get('data-src')
            # .find('img')['data-src']
        links.append(link)
    return links


host = 'https://www.chitai-gorod.ru/'
cat = 'catalog/books/informatika-110299'
url = host + cat
html = get_html(url)
links = get_links_on_page(html)

for link in links: print(link.split('/')[-1], link)
