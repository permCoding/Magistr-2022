import requests
import json

url = "https://pcoding.ru/json/clients.json"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

data = json.loads(line)  # строку в объект

clients = data["clients"]  # выбрал поле clients

clients.sort(key=lambda obj: obj["age"], reverse=True)

print(json.dumps(clients[:3], ensure_ascii=False, indent=4))

with open("./json/clients.json", "w", encoding="utf8") as f:
    json.dump(clients[:3], f, ensure_ascii=False, indent=4)

"""
1) из url взять имя файла и его использовать при сохранении
2) сократить поля объектов по требованию ["name", "age"]

"""