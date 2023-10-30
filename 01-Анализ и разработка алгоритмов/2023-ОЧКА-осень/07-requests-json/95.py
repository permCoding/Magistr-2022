import requests
import json
import os

url = "https://pcoding.ru/json/clients.json"
filename = os.path.basename(url)
# filename = url.split("/")[-1]
print(filename)

response = requests.get(url)
response.encoding = "utf8"
line = response.text

data = json.loads(line)  # строку в объект
clients = data["clients"]  # выбрал поле clients

# clients = map(lambda x: dict(zip(["name", "age"], [x["name"], x["age"]])), clients)
# clients = map(lambda x: {key: val for key, val in zip(["name", "age"], [x["name"], x["age"]])}, clients)
clients = map(lambda x: { "name": x["name"], "age": x["age"]}, clients)

# clients = sorted(sorted(clients, key=lambda x: x["age"], reverse=True), key=lambda x: x["name"])  # не работает

clients = sorted(clients, key=lambda x: (-x["age"], x["name"]))  # работает
clients = sorted(clients, key=lambda x: (-x["age"], x["name"]), reverse=True)  # работает

for cl in clients: print(cl["age"], cl["name"])

# with open("./json/clients_filtred.json", "w", encoding="utf8") as f:
#     json.dump(clients, f, ensure_ascii=False, indent=4)
