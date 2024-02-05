import requests  # pip install requests


def get_lines_from_url(url):
    """получить список строк из файла по адресу"""
    resp = requests.get(url)
    return resp.text.split('\n')


url = "https://pcoding.ru/txt/labrab04-3.txt"
lines = get_lines_from_url(url)
lst = []
for line in lines:
    lst.append(line.split(';')[1])
lst.sort() 
for elm in lst:
    print(elm)