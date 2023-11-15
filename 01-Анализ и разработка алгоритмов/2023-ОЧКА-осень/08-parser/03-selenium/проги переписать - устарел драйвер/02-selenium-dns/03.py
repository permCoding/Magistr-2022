# https://www.selenium.dev/selenium/docs/api/py/
from urllib.parse import unquote
from selenium import webdriver
from selenium.webdriver.common.by import By


browser = webdriver.Firefox()
# (browser.page_source).encode('utf-8')
# (browser.page_source).encode('ascii', 'ignore')

browser.get('https://pcoding.ru/darkNet.php')

td_first = browser \
    .find_elements(By.TAG_NAME, 'table')[1] \
    .find_element(By.TAG_NAME, 'tbody') \
    .find_elements(By.TAG_NAME, 'tr')[1] \
    .find_element(By.TAG_NAME, 'td')
links = td_first.find_elements(By.TAG_NAME, 'a')
for link in links:
    href = link.get_attribute('href')
    print(link.text, unquote(href))


browser.quit()
