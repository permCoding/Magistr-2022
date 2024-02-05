import requests
import json

url = "https://pcoding.ru/json/clients.json"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

data = json.loads(line)  # строку в объект

clients = data["clients"]  # выбрал поле clients

def check(obj): return obj["gender"] == "male" and obj["address"]["city"] == "Кунгур"
clients_filtred = list(filter(check, clients))

# clients_filtred = list(filter(lambda obj: obj["gender"] == "male", clients))

with open("./json/clients_filtred.json", "w", encoding="utf8") as f:
    json.dump(clients_filtred, f, ensure_ascii=False, indent=4)

"""
1) из url взять имя файла и его использовать при сохранении
2) сократить поля объектов по требованию ["name", "age"]

"""