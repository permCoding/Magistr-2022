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
def div_and_class(tag):
    """у тега есть атрибут класс"""
    u1 = tag.name == 'div'
    u2 = tag.has_attr('class')
    u3 = tag.has_attr('id')
    if u1 and u2:
        return not u3
    else:
        return False

tags = soup \
    .find('div', class_='prod__info') \
    .find_all(div_and_class)

for tag in tags:
    print(tag.find('span').text.strip())

