import requests
from bs4 import BeautifulSoup


url = 'https://pogoda7.ru/prognoz/gorod701-Russia-Permskiy_kray-Perm/10days/full'

response = requests.get(url)
response.encoding = "utf8"
html = response.text


soup = BeautifulSoup(html, "html.parser")
curr = soup \
    .find('div', { 'class': 'current_data' }) \
    .find('div', { 'class': 'grid precip' }) \
    .find('div', { 'class': 'temperature' })

temp = curr.text.strip()

print('Текущая температура в Перми:', temp)


'''
<div class="temperature tooltip" title="Текущая температура в Перми: -17.1°C .. -16°C">-17°C</div>
'''