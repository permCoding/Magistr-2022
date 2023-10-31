import requests  # pip install requests


def get_lines_from_url(url):
    """получить список строк из файла по адресу"""
    resp = requests.get(url)
    return resp.text.split('\n')


url = "https://pcoding.ru/txt/labrab04-1.txt"
lines = get_lines_from_url(url)

# print(max(map(int, filter(lambda line: len(line) == 2, lines))))
print(max([int(line) for line in lines if len(line) == 2]))
