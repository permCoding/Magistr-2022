# pip install selenium
# https://www.selenium.dev/documentation/webdriver/elements/finders/

from selenium import webdriver
from selenium.webdriver.common.by import By  # чтобы искать селекторы
from time import sleep

browser = webdriver.Chrome()
browser.maximize_window()

url = 'http://pcodd65.1gb.ru/'
browser.get(url)

input_user = browser.find_element(By.ID, 'username')
input_user.clear()
input_user.send_keys('user3')
sleep(1)  # пауза чтобы посмотреть

input_password = browser.find_element(By.ID, 'password')
input_password.clear()
input_password.send_keys('u42Gal')
sleep(1)  # пауза чтобы посмотреть

btn = browser \
    .find_element(By.TAG_NAME, 'form') \
    .find_elements(By.TAG_NAME, 'input')[2]
btn.click()
sleep(5)  # пауза чтобы посмотреть

browser.close()  # закрыть окно
browser.quit()  # закрыть браузер
