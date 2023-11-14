# parser  

---  

Инструменты автоматизации:  

- Web Scraper  
- Web Data Scraper  

Технологии программирования:  

- получить html и самому добыть данные со страницы (Tiobe)  
- для сайтов с API - получить json и выбрать необходимые данные (GitHub, files)  
- динамический сайт с json-запросами (WB)  

**links:**

https://curlconverter.com/  

https://pogoda7.ru/prognoz/gorod701-Russia-Permskiy_kray-Perm/  
https://www.tiobe.com/tiobe-index/  
http://files-pcoding.1gb.ru/  

http://parsing.1gb.ru/  
http://parsing.1gb.ru/tiobe/rate.desc.3  
http://parsing.1gb.ru/temp/Piter  

https://api.github.com/users/{user}/repos  
https://api.github.com/users/permCoding/repos  

https://beautiful-soup-4.readthedocs.io/en/latest/  
https://www.crummy.com/software/BeautifulSoup/bs4/doc/  

---  

**получить html и самому добыть данные со страницы:**  

0) одна простая страница - тестовый пример с разбором bs4 -  
https://pcoding.ru/parsing/01/page.html  

1) одна страница - сложная таблица -  
https://www.championat.com/hockey/_superleague/tournament/5077/table/#all  

2) много страниц - паджинация -  
https://www.chitai-gorod.ru/catalog/books/nauchnaya-fantastika-9693?page=1  

3) скроллинг на странице с подгрузкой данных динамически -  
https://scrapingclub.com/exercise/list_infinite_scroll/  

---  

```
.table-top20 tr:nth-of-type(1) td:nth-of-type(5)
```

curl 'https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=pi_100&TestID=348&appType=1&curr=rub&dest=-1257786&query=%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD&resultset=catalog&sort=popular&spp=25&suppressSpellcheck=false' \
  -H 'Accept: */*' \
  -H 'Accept-Language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Connection: keep-alive' \
  -H 'Origin: https://www.wildberries.ru' \
  -H 'Referer: https://www.wildberries.ru/catalog/0/search.aspx?search=%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: cross-site' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  --compressed














