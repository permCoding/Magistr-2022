from parsing import get_html


url = "https://www.championat.com/hockey/_superleague/tournament/5077/table/#all"

html = get_html(url)

with open("tournament.html", 'w', encoding='utf8') as f:
    f.write(html)
