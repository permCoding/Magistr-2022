from bs4 import BeautifulSoup

html = """
<div class="prod__info">
    <div class="prod__name" id="prodname">
        <span>   ZenFone 3 Deluxe Oreo   </span>
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
</div>"""

soup = BeautifulSoup(html, "html.parser")

# найти первый тег с указанным классом
prod = soup.find('div', class_='prod__info')

# найти первый тег div с указанным классом
prod = soup.find('div', { 'class': 'prod__info' })

# найти первый тег div с указанным id
prodname = prod.find('div', id='prodname').text.strip()
print(prodname)

# найти первый тег div с указанным классом и id
prodname = prod.find('div', {'id':'prodname', 'class':'prod__name'}).text.strip()
