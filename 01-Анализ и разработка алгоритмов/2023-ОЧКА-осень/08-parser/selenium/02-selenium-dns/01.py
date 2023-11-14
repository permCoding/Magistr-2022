# https://www.selenium.dev/selenium/docs/api/py/

from selenium import webdriver

browser = webdriver.Firefox()
browser.get('https://pcoding.ru/darkNet.php')

print(browser.title)

browser.close()

# browser.quit()  # закрывает все окна 
