import requests
from bs4 import BeautifulSoup


def get_html(url):
    head = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0'
    }
    resp = requests.get(url, headers=head)
    resp.encoding = "utf8"
    return resp.text


url = 'https://www.tiobe.com/tiobe-index/'
html = get_html(url)

soup = BeautifulSoup(html, "lxml")  # "html.parser" # pip install lxml
# html = soup.prettify()
# with open("./tiobe.html", "w", encoding="utf8") as f:
#     f.write(html)
table = soup.find('table', { 'id': 'top20'})
tbody = table.find('tbody')
trs = tbody.find_all('tr')
lst = []
for tr in trs:
    tds = tr.find_all('td')
    lst.append(tds[4].text.strip())
print(sorted(lst))
