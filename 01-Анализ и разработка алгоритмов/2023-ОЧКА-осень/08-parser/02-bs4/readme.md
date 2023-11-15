## bs4

**links:**  

0) тестовый пример с разбором bs4  
1) сложная таблица -  
https://www.championat.com/hockey/_superleague/tournament/5077/table/#all  
2) паджинация -  
https://www.chitai-gorod.ru/catalog/books/nauchnaya-fantastika-9693?page=1  
3) скроллинг на странице с подгрузкой данных динамически -  
https://scrapingclub.com/exercise/list_infinite_scroll/  

### Библиотека для парсера данных из html разметки  

Методы:  
- .find() .find_all()  
- .find_parent() .find_parents()  
- .find_next_sibling() .find_previous_sibling()  
- .find_next_siblings() .find_previous_siblings()  
- .next_element .previous_element  
- .next_elements .previous_elements  
- .get() dict  
- import re: soup.find_all(text=re.compile(ptn))  

---  

Документация:  
https://beautiful-soup-4.readthedocs.io/en/latest/  
https://www.crummy.com/software/BeautifulSoup/bs4/doc.ru/bs4ru.html  

**Установить библиотеку и создать объект:**  

```py
from bs4 import BeautifulSoup  # pip install bs4

soup = BeautifulSoup(src, "lxml")  # pip install lxml
soup = BeautifulSoup(src, "html.parser")  # уже есть
```

**1) найти тег или все теги, найти по классу, по id**  
- .find()  
- .find_all()  

```py
page_h1 = soup.find("h1")
page_all_h1 = soup.find_all("h1")

user_name = soup.find("div", class_="user__name")
print(user_name.text.strip())

user_name = soup.find(class_="user__name").find("span").text
print(user_name)

user_name = soup.find("div", {"class": "user__name", "id": "aaa"}).find("span").text

find_all_spans_in_user_info = soup.find(class_="user__info").find_all("span")
for item in find_all_spans_in_user_info:
    print(item.text)

print(find_all_spans_in_user_info[0].text)

social_links = soup.find(class_="social__networks").find("ul").find_all("a")

for item in soup.find_all("a"):
    item_text = item.text
    item_url = item.get("href")
```

---  

**2) родительский элемент или элементы**  
- .find_parent()  
- .find_parents()  

```py
post_div = soup.find(class_="post__text").find_parent()
post_div = soup.find(class_="post__text").find_parent("div", "user__post")
post_divs = soup.find(class_="post__text").find_parents("div", "user__post")
```

**3) последуюущий и предыдущий элементы**  

- .next_element  
- .previous_element  
- .next_elements  
- .previous_elements  

```py
next_el = soup.find(class_="post__title").next_element.next_element.text
next_el = soup.find(class_="post__title").find_next().text
```

**4) братья и сестры**  

- .find_next_sibling()  
- .find_previous_sibling()  
- .find_next_siblings()  
- .find_previous_siblings()  

```py
next_sib = soup.find(class_="post__title").find_next_sibling()
prev_sib = soup.find(class_="post__date").find_previous_sibling()
post_title = soup.find(class_="post__date").find_previous_sibling().find_next().text
```

**5) обращение как со словарём или через метод**  

- .get()  
- dict  

```py
links = soup.find(class_="some__links").find_all("a")
for link in links:
    link_href_attr = link.get("href")
    link_href_attr = link["href"]
```

**6) найти тег по содержанию с помощью re**  

find_a_by_text = soup.find("a", text="Одежда")
find_a_by_text = soup.find("a", text="Одежда для взрослых")

import re
find_a_by_text = soup.find("a", text=re.compile("Одежда"))
find_all_clothes = soup.find_all(text=re.compile("([Оо]дежда)"))
find_all_clothes = soup.find_all(text=re.compile("одежда", re.I))
```

---  

**Получить html:**  
```py
def get_html(url):
    head = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0'
    }
    resp = requests.get(url, headers=head)
    resp.encoding = "utf8"
    return resp.text
```

**Ещё примеры:*  

```py
# print(soup.find_all('title'))
# print(soup.find('title'))
# print(soup.find('title').text)

# print(soup.find_all(class_='title'))

# for e in soup.find_all('span'): print(e)
# for e in soup.find_all('span'): print(e.text)

# = = = = = = = = = = = = = = = 

# prod = soup.find('div', class_='prod__info')
# prod = soup.find('div', { 'class': 'prod__info' })
# prodname = prod.find('div', id='prodname').text.strip()

# prodname = prod.find('div', {'id':'prodname', 'class':'prod__name'}).text.strip()
# prodprice = prod.find_all('div')[1].find_all('span')[1].text
# print(f"{prodname} | {prodprice}")

# pp = prod.find_all('div')[1].find_all('span')
# for e in pp: print(e.text)
# for i in range(len(pp)-1,-1,-1): print(pp[i].text)

# = = = = = = = = = = = = = = = 

find_price = soup.find('span', string="Стоимость:")
print(find_price)
print(find_price.find_next_sibling())
for e in find_price.find_next_siblings('span'):
    print('-', e)

# find_price = soup.find('span', string=re.compile('Руб\.?', re.I))
find_price = soup.find('span', string=re.compile('[Рр]уб\.{0,1}'))
print(find_price)
print(find_price.find_previous_sibling())
print(find_price.find_previous_sibling().text)
for e in find_price.find_previous_siblings('span')[::-1]:
    print('+', e.text)

# = = = = = = = = = = = = = = = 

links = soup.find(class_="shops__info").find_all("a")
for link in links:
    print(link.get("href"))
    print(link["href"])
    print(link.text)

# = = = = = = = = = = = = = = = 

# def class_without_id(tag):
#     return tag.has_attr('class') and not tag.has_attr('id')
# tags = soup \
#     .find('div', class_='prod__info') \
#     .find_all(class_without_id)[:2]
# for e in tags: print(e)

```
