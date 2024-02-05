from bs4 import BeautifulSoup

html = """
<div class="prod__info">
    <div>
        <p>10.03.2023</p>
        <p>11.03.2023</p>
        <p>17.03.2023</p>
        <p>02.04.2023</p>
    </div>
    <div class="prod__name" id="prodname">
        <span>ZenFone 3 Deluxe Oreo</span>
    </div>
    <div class="prod__price clr news">
        <span>Информация</span>
        <span>Идентификатор</span>
        <span class="price__info">Стоимость:</span>
        <span>22500 руб</span>
    </div>
    <div>
        <span>Страна производитель:</span>
        <span>Italy</span>
    </div>
</div>"""

soup = BeautifulSoup(html, "html.parser")

# найти соседние тегов
print(soup \
    .find('div', class_='prod__price') \
    .find_next('div').text.strip())
print('- - - - - -')
print(soup \
    .find(class_='price__info') \
    .find_next_sibling().text)
print('- - - - - -')
lst = soup \
    .find(class_='price__info') \
    .find_previous_siblings()
for elm in lst[::-1]: print(elm.text)
