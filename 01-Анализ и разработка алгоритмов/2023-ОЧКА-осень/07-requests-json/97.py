import requests
import json

url = "https://pcoding.ru/json/clients.json"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

data = json.loads(line)  # строку в объект
clients = data["clients"]  # выбрал поле clients

s_name = sorted(clients, key=lambda x: x["name"], reverse=True)
s_age  = sorted(s_name, key=lambda x: x["age"])
clients = sorted(s_age, key=lambda x: x["gender"])

for cl in clients: 
    print(cl["gender"], cl["age"], cl["name"], cl["address"]["city"])
