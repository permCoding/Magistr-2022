import requests


url = 'https://pogoda7.ru/prognoz/gorod701-Russia-Permskiy_kray-Perm/10days/full'

response = requests.get(url)
response.encoding = "utf8"
txt = response.text

# print(txt)

p1 = txt.find('<div class="temperature"')
p1 = txt.find('>', p1) + 1
p2 = txt.find('<', p1)

print('Текущая температура в Перми:', txt[p1:p2])


'''
<div class="temperature tooltip" title="Текущая температура в Перми: -17.1°C .. -16°C">-17°C</div>
'''