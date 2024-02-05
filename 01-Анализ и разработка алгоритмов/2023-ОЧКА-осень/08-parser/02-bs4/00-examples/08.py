from bs4 import BeautifulSoup

html = """
<div>
    <div>
        <span>    ZenFone 3 Deluxe Oreo</span>
    </div>
    <div class="prod__price">
        <span id="price__title">Стоимость:</span>
        <span>22500 руб</span>
    </div>
</div>"""

soup = BeautifulSoup(html, "html.parser")

# найти тег по рядом лежащим
tag = soup \
    .find(id='price__title') \
    .find_parent() \
    .find_previous()
print(tag.text.strip())
