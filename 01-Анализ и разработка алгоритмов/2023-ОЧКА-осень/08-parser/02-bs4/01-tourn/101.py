from parsing import get_html
from bs4 import BeautifulSoup  # pip install bs4


url = 'https://www.championat.com/hockey/_superleague/tournament/5077/table/#all'
html = get_html(url)
soup = BeautifulSoup(html, 'html.parser')
title = soup \
    .find('div', class_='entity-header__title') \
    .find('div').find('a').text.strip()
print(title)

tbody = soup \
    .find('div', class_='tournament-tabs__content') \
    .find('div') \
    .find('table') \
    .find('tbody')

trs = tbody.find_all('tr')
for tr in trs:
    tds = tr.find_all('td')
    i = tds[0].text.strip()
    name = tds[1].text.strip()
    balls = tds[9].text.strip()
    balls_u, balls_d = balls.split('-')
    print(i, name, balls_u, balls_d)

"""
<div class="entity-header__title toik">
<div class="entity-header__title-name wpxdovr">
<a href="/hockey/_superleague/tournament/5077/" class="rhstkqm">
    Фонбет Чемпионат КХЛ
</a>
</div>
<a class="jckjsur button js-entity-header-all-tournaments _all-tournaments" href="/stat/hockey/tournaments/431/international/">
Все турниры                    </a>

</div>
"""
