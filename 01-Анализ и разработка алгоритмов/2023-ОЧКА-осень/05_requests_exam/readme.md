## EXAM  

### filtred data  

#### Задания для лабораторной работы:  

---  

##### 1 ТОЧКИ  

Откройте файл [https://pcoding.ru/csv/09_2098.txt](https://pcoding.ru/csv/09_2098.txt), содержащей в каждой строке четыре целых числа:  

- первые два числа - координаты точки `(x0; y0)`,  
- следующие два числа - координаты точки `(x1; y1)`.  

Выясните, какое количество пар точек, в которых обе лежат на осях координат.  

---  

##### 2 ТРЕУГОЛЬНИКИ  

Откройте файл https://pcoding.ru/csv/09_2100.txt, содержащей в каждой строке три натуральных числа.  

Выясните, какие тройки чисел являются пифагоровыми тройками, то есть являться сторонами прямоугольного треугольника. В ответе запишите максимальную сумму двух катетов найденных прямоугольных треугольников.  

---  

##### 3 ПАРЫ  

В файле https://pcoding.ru/csv/09_4756.txt в каждой строке содержатся шесть натуральных чисел.  

Определите количество строк, в которых числа можно разбить на три пары, состоящие из одинаковых чисел. Например: шестёрку чисел `1;2;3;3;1;2` можно разбить на пары `1; 1` `2; 2` `3; 3`.  

---  

ПРИМЕР  
как получать данные из файла по адресу:  

```py
import requests


def get_lines_from_url(url):
    """получить список строк из файла по адресу"""
    req = requests.get(url)
    req.encoding = "utf8"
    return req.text.split('\n')


url = "https://pcoding.ru/csv/exam03.txt"
lines = get_lines_from_url(url)
print(lines)
```
