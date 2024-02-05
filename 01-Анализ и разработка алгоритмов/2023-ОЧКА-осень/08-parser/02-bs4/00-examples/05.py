from bs4 import BeautifulSoup
import re

html = """
<div class="prod__info">
    <div class="prod__name" id="prodname">
        <span>ZenFone 3 Deluxe Oreo</span>
    </div>
    <div class="prod__price">
        <span>Стоимость:</span>
        <span>правдоруб</span>
        <span>12500руб.</span>
        <span>22500 руб</span>
        <span>32500 руб.</span>
        <span>42500     Руб.</span>
    </div>
    <div class="prod__country">
        <span class="country__label">Страна производитель:</span>
        <span>Italy</span>
    </div>
</div>"""

soup = BeautifulSoup(html, "html.parser")

# найти все теги по содержимому с помощью re
tag_price = soup.find('span', string=re.compile('руб'))
print(tag_price.text)
print('- - - - -')
tags = soup.find_all('span', string=re.compile('Руб.'))
for tag in tags: print(tag.text)
print('- - - - -')
tags = soup.find_all('span', string=re.compile('\d+\s*руб\.?', re.I))
for tag in tags: print(tag.text)
