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
    .find_all('tr')

teams = []
for tr in trs:
    tds = tr.find_all('td')
    i = tds[0].text.strip()
    name = tds[1].text.strip()
    balls = tds[9].text.strip()
    balls_u, balls_d = balls.split('-')
    teams.append( [i, name, balls_u, balls_d] )

for team in teams:
    print(team)
