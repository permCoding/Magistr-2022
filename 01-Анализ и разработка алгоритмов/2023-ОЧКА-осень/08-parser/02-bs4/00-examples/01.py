from bs4 import BeautifulSoup

html = """
<head>
    <meta charset="UTF-8">
    <title>Страница товара - смартфон</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="favicon.ico">
</head>"""

soup = BeautifulSoup(html, "html.parser")  # "lxml" # pip install lxml

# найти первый тег title
print(soup.find('title'))
# получить текстовое содержимое тега
print(soup.find('title').text)

# найти все теги link
links = soup.find_all('link')
for link in links:  # и вывести их атрибут href
    print(link["href"])
