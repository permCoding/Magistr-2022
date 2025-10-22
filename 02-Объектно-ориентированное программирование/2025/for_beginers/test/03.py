import requests


url = "http://perm.1gb.ru/txt/labrab04-1.txt"
response = requests.get(url)
response.encoding = "utf-8"
text = response.text

print(text)

"""
Uniform Resource Locator — унифицированный указатель ресурса
— это стандартный способ записи адреса, 
по которому можно получить доступ к ресурсу в интернете, 
например, к веб-странице, файлу, изображению или видео. 
Каждый URL определяет, какой протокол используется (HTTP, HTTPS, FTP и др.), 
адрес сервера (домен), а также путь к конкретному ресурсу, включая имя файла.
"""