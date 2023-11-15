# https://www.selenium.dev/selenium/docs/api/py/

from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Firefox()
browser.get('https://pcoding.ru/darkNet.php')

links = browser.find_elements(By.CLASS_NAME, 'links')
for link in links: 
    if link.text[-4:] == '.pdf':
        print(link.text)

browser.quit()
