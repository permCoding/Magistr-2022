from requests import get
from bs4 import BeautifulSoup as BS
import json


url = "https://www.tiobe.com/tiobe-index/"
html = get(url).text

soup = BS(html, "html.parser")
table = soup.find("table", id="top20")  

rows = table.find("tbody").find_all("tr")

langs = []
for row in rows:
    tds = row.find_all("td")
    lang = {
        "curr": int(tds[0].text),
        "prev": int(tds[1].text),
        "pro_lang": tds[4].text,
        "rating": float(tds[5].text.strip('%')),
        "change": float(tds[6].text.strip('%'))
    }
    langs.append( lang )

count = 3
langs.sort(key=lambda lang: lang["change"], reverse=True)
print( json.dumps(langs[:count], indent=2) )
