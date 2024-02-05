import requests
from bs4 import BeautifulSoup


url = 'https://pogoda7.ru/prognoz/gorod701-Russia-Permskiy_kray-Perm/10days/full'

response = requests.get(url)
response.encoding = "utf8"
html = response.text


soup = BeautifulSoup(html, "html.parser")
tabs = soup \
    .find('div', { 'class': 'forecast' }) \
    .find_all('div', { 'class': 'forecast-table' })

days = []
for tab in tabs:
    lst = tab.find_all('div', class_="table-row-day")
    days.extend(lst)

for day in days:
    cell = day.find('div', class_="table-cell-day")
    divs = cell.find_all('div')
    lst = [item.text for item in divs]
    print("\t".join(lst))

'''
<div class="temperature tooltip" title="Текущая температура в Перми: -17.1°C .. -16°C">-17°C</div>
'''