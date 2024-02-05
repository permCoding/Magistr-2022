from bs4 import BeautifulSoup

html = """
<div class="prod__info">
    <div class="prod__name" id="prodname">
        <span>ZenFone 3 Deluxe Oreo</span>
    </div>
    <div class="prod__price clr news">
        <span>Стоимость:</span>
        <span>    22500 руб    </span>
        <span>52500 руб.</span>
        <span>42500 Руб.</span>
        <span>2150 р.</span>
        <span> 999 </span>
    </div>
    
    <div class="prod__price">
        <span>Стоимость:</span>
        <span> 999 </span>
    </div>
        
    <div class="prod__country">
        <span class="country__label">Страна производитель:</span>
        <span>Italy</span>
    </div>
</div>"""

soup = BeautifulSoup(html, "html.parser")

# найти список тегов по классу
tags = soup \
    .find('div', {'class': 'prod__price'}) \
    .find_all('span')[1:]  # без заголовка
for tag in sorted(tags, key=lambda e: int(e.text.strip().split()[0])):
    print(tag.text.strip())
