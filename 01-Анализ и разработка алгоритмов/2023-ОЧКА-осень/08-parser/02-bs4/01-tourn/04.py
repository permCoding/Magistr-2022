from bs4 import BeautifulSoup as bs
import json
from parsing import get_html


url = "https://www.championat.com/hockey/_superleague/tournament/5077/table/#all"
html = get_html(url)
soup = bs(html, 'html.parser')

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
    teams.append(dict(zip(cols,vals)))
 

with open('results.json', 'w', encoding='utf8') as f:
    json.dump(teams, f, ensure_ascii=False, indent=4)