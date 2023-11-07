# тут будем читать из локального html-файла
from bs4 import BeautifulSoup as bs


with open('./tournament.html', 'r', encoding='utf8') as f:
    html = f.read()

soup = bs(html, 'html.parser')

trs = soup \
    .find('table', { 'class': 'results-table' }) \
    .find('tbody') \
    .find_all('tr')

for tr in trs:
    tds = tr.find_all('td')
    print(
        tds[0].text.strip(), 
        tds[1].text.strip(), 
        tds[9].text.strip()
    )

# tables = soup.find_all('table', class_="results-table")

# table = soup.find('table', class_="results-table")  # dict
