from bs4 import BeautifulSoup as bs
import json


with open('./tournament.html', 'r', encoding='utf8') as f:
    html = f.read()

# soup = bs(html, 'html.parser')
soup = bs(html, 'lxml')

trs = soup \
    .find('table', class_="results-table") \
    .find('tbody') \
    .find_all('tr')

cols = ['name', 'ball_up', 'ball_down']
teams = []
for tr in trs:
    tds = tr.find_all('td')
    pair = tds[9].text.strip().split('-')
    vals = [tds[1].text.strip(), pair[0], pair[1]]
    obj = dict(zip(cols,vals))
    teams.append(obj)

with open('results.json', 'w', encoding='utf8') as f:
    json.dump(teams, f, ensure_ascii=False, indent=4)

