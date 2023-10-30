import requests
import json

url = "https://pcoding.ru/json/clients.json"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

data = json.loads(line)  # строку в объект
clients = data["clients"]  # выбрал поле clients
# with open("./json/clients.json", "w", encoding="utf8") as f:
#     json.dump(clients, f, ensure_ascii=False, indent=4)

# clients = sorted(clients, key=lambda x: (x["address"]["city"], x["gender"]))

# clients = sorted(
#     sorted(clients, key=lambda x: x["gender"], reverse=True),
#     key=lambda x: x["address"]["city"]
# )

clients = \
sorted(
    sorted(
        sorted(
            clients, 
            key=lambda x: x["age"]
        ),
        key=lambda x: x["gender"], 
        reverse=True
    ),
    key=lambda x: x["address"]["city"]
)

for cl in clients: 
    print(f'{cl["address"]["city"]:12s}{cl["gender"]:8s}{cl["age"]:d}  {cl["name"]}')
