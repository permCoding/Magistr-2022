from bs4 import BeautifulSoup

html = """
<div class="prod__info">
    <div id="prodname">
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

# найти все теги по функции
def div_and_class(tag):
    """у тега есть атрибут класс"""
    u1 = tag.name == 'div'
    u2 = tag.has_attr('class')
    return u1 and u2

tags = soup \
    .find('div', class_='prod__info') \
    .find_all(div_and_class)

for tag in tags:
    print(tag.find('span').text.strip())

