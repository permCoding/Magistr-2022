# pip install selenium
# https://www.selenium.dev/documentation/webdriver/elements/finders/

from selenium import webdriver
from selenium.webdriver.common.by import By  # чтобы искать селекторы
from time import sleep
import json


def get_data_on_page():
    """ собрать данные с текущей страницы """
    sleep(5)
    data_on_page = []
    lst = browser.find_elements(By.CLASS_NAME, 'list-entry')
    for elm in lst:
        title = elm.find_element(By.TAG_NAME, 'a').text.strip()
        data = elm.find_element(By.TAG_NAME, 'small').text.strip()
        if data != '': data_on_page.append([data,title])
    return data_on_page


def next_page():
    """  обработать очередную страницу """
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    news.extend(get_data_on_page())
    print(f'page={page}\t{len(news)}')

    
def write_to_json(filename, news):
    """ записать список новостей в json-файл """
    cols = ['id','data','title']
    lst = [dict(zip(cols,[i+1]+elm)) for i, elm in enumerate(news)]
    with open(filename, 'w', encoding='utf8') as f:
        json.dump(lst, f, ensure_ascii=False, indent=4)


page = 0  # номер страницы
count_pages = 3  # всего посмотрим 3 страницы
news = []  # тут будем накапливать новости

browser = webdriver.Chrome()
browser.maximize_window()

browser.get('https://pgatu.ru/today/')

while page < count_pages:  # цикл паджинации
    page += 1
    if page > 1:
        browser \
            .find_element(By.CLASS_NAME, 'pagination') \
            .find_element(By.CLASS_NAME, 'next') \
            .click()  # перешли к следующей странице
    next_page()

browser.close()  # закрыть окно
browser.quit()  # закрыть браузер

write_to_json('news.json', news)

# <div class="pagination">
# <a href="#" class="next">Следующая</a></div></nav>
