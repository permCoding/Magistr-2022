from parsing import get_html
from bs4 import BeautifulSoup  # pip install bs4


url = 'https://www.championat.com/hockey/_superleague/tournament/5077/table/#all'
html = get_html(url)
soup = BeautifulSoup(html, 'html.parser')

trs = soup \
    .find('div', class_='tournament-tabs__content') \
    .find('div') \
    .find('table') \
    .find('tbody') \
    .find_all('tr')  # найдём все строки таблицы

teams = []
for tr in trs:  # переберём все строки
    tds = tr.find_all('td')  # найдём все ячейки в строке
    i = tds[0].text.strip()
    name = tds[1].text.strip()
    balls = tds[9].text.strip()
    balls_u, balls_d = balls.split('-')
    teams.append( [int(i), name, int(balls_u), int(balls_d)] )

for team in sorted(teams, key=lambda e: e[2], reverse=True):
    print(team)
