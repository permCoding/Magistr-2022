import requests
import json

url = "https://pcoding.ru/json/clients.json"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

data = json.loads(line)  # строку в объект

clients = data["clients"]  # выбрал поле clients

clients.sort(key=lambda obj: obj["age"], reverse=True)

print(json.dumps(clients, ensure_ascii=False, indent=4))

f = open("./clients.json", mode="w", encoding="utf8")

json.dump(clients, f, ensure_ascii=False, indent=4)

f.close()
