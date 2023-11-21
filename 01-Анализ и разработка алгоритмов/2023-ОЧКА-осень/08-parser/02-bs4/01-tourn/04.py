from bs4 import BeautifulSoup as bs
import json


with open('./tournament.html', 'r', encoding='utf8') as f:
    html = f.read()

soup = bs(html, 'html.parser')

trs = soup \
    .find('table', class_="results-table") \
    .find('tbody') \
    .find_all('tr')

teams = []
for tr in trs:
    tds = tr.find_all('td')
    
    pair = tds[9].text.strip().split('-')
    
    obj = {
        'name': tds[1].text.strip(), 
        'ball_up': pair[0], 
        'ball_down': pair[1] 
    }
    teams.append(obj)

with open('results.json', 'w', encoding='utf8') as f:
    json.dump(teams, f, ensure_ascii=False, indent=4)

