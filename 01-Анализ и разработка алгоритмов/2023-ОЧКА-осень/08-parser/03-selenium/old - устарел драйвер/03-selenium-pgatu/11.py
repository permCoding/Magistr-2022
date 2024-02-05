# https://www.selenium.dev/selenium/docs/api/py/
# from urllib.parse import unquote  # это при необходимости unquote('https://pcoding.ru/pdf/%D0%9A.pdf')
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep


browser = webdriver.Firefox()
browser.get('https://pgatu.ru/today/')
sleep(6)

try:
    button = browser.find_element(By.CLASS_NAME, 'next')
    print(button.text.strip())
except:
    print('ошибка на странице')

browser.quit()

"""
<nav id="pagination">
<div class="pagination">
<span class="current prev">Предыдущая</span>
<span class="current">1</span>
<a href="#">2</a>
<a href="#">3</a>
<a href="#">4</a>
<a href="#">5</a>
<a href="#">6</a>
<a href="#">7</a><a href="#">8</a><a href="#">9</a><a href="#">10</a><span>...</span>
<a href="#" class="ep">208</a>
<a href="#" class="next">Следующая</a></div></nav>

"""