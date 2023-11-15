from bs4 import BeautifulSoup

html = """
<div class="prod__info">
    <div class="prod__name" id="prodname">
        <span>ZenFone 3 Deluxe Oreo</span>
    </div>
    <div class="prod__price">
        <span>Стоимость:</span>
        <span>22500</span>
        <span>руб.</span>
    </div>
    <div class="prod__country">
        <span class="country__label">Страна производитель:</span>
        <span>Italy</span>
    </div>
    <div class="prod__rating">
        <span>Рейтинг:</span>
        <span>9.8</span>
    </div>
</div>"""

soup = BeautifulSoup(html, "html.parser")

# найти все теги по функции - только заголовки
tags = soup \
    .find('div', class_='prod__info') \
    .find_all('div')[1:]
for tag in tags:
    print(tag.find_all('span')[0].text.strip())
