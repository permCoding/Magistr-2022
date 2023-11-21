from bs4 import BeautifulSoup

html = """
<div class="prod__info">
    <div>
        <p>10.03.2023</p><p>11.03.2023</p>
        <p>17.03.2023</p>
        <p>02.04.2023</p>
    </div>
    <div class="prod__name">
        <span id="prodname">ZenFone 3 Deluxe Oreo</span>
    </div>
    <div class="prod__price clr news">
        <span class="price__info">Стоимость:</span>
        <span id="prodprice">22500 руб</span>
    </div>
    <div>
        <span>Страна производитель:</span>
        <span id="prodcountry">Italy</span>
    </div>
</div>"""

soup = BeautifulSoup(html, "html.parser")

# найти соседний элемент разбора парсером
tags = soup.find_all('span')
for tag in tags:
    if tag.has_attr('id'):
        print(tag.attrs['id'])
