import requests


def get_lines_from_url(url):
    """получить список строк из файла по адресу"""
    req = requests.get(url)
    req.encoding = "utf8"
    return req.text.split('\n')


url = "https://pcoding.ru/txt/labrab04-1.txt"
lines = get_lines_from_url(url)
print(lines)
