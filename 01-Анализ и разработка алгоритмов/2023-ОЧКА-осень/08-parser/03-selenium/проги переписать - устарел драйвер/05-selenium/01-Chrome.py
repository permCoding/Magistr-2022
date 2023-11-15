# This version of ChromeDriver only supports Chrome version 114
import undetected_chromedriver
from selenium.webdriver.common.by import By
from time import sleep
import json


def get_data_on_page():
    sleep(5)
    
    lst_page = []
    lst = browser.find_elements(By.CLASS_NAME, 'list-entry')
    for elm in lst:
        title = elm \
            .find_element(By.TAG_NAME, 'a').text.strip()
        data = elm \
            .find_element(By.TAG_NAME, 'small').text.strip()
        if data != '':
            lst_page.append([data,title])
    return lst_page


def write_to_json(filename, news):
    cols = ['id','data','title']
    lst = []
    for i, elm in enumerate(news): 
        lst.append(dict(zip(cols,[i+1]+elm)))
    with open(filename, 'a', encoding='utf8') as f:
        json.dump(lst, f, ensure_ascii=False, indent=4)



browser = undetected_chromedriver.Chrome()
browser.maximize_window()

count_pages = 3
news = []

page = 1
print(f'page={page}')
browser.get('https://pgatu.ru/today/')
browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
news.extend(get_data_on_page())

while page < count_pages:
    page += 1
    print(f'page={page}')
    browser.find_element(By.CLASS_NAME, 'next').click()
    # browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    news.extend(get_data_on_page())

browser.close()
browser.quit()

write_to_json('news.json', news)


# <a href="#" class="next">Следующая</a></div></nav>
