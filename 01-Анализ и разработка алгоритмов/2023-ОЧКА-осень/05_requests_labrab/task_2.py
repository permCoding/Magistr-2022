import requests  # pip install requests


def get_lines_from_url(url):
    """получить список строк из файла по адресу"""
    resp = requests.get(url)
    return resp.text.split('\n')


url = "https://pcoding.ru/txt/labrab04-2.txt"
lines = get_lines_from_url(url)

results = []
for line in lines:
    if line != "":
        lst = line.split()
        if all([int(elm) & 1 != 0 for elm in lst]):
            results.append(lst)

print(len(results))
print(results)
"""
1 Найти самое большое двузначное число
2 Найти количество строк, в которых все числа нечётные

"""