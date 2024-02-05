import requests  # pip install requests


def get_lines_from_url(url):
    """получить список строк из файла по адресу"""
    req = requests.get(url)
    req.encoding = "utf8"
    return req.text.split('\n')


url = "https://pcoding.ru/csv/09_2098.txt"
lines = get_lines_from_url(url)
print(len(lines))
count = 0

for line in lines:
    lst = line.split(";")
# for i in range(len(lines)):
    # lst = lines[i].split(";")
    a = lst[0] == "0" or lst[1] == "0"
    b = lst[2] == "0" or lst[3] == "0"
    if a and b:
        count += 1

print(count)
