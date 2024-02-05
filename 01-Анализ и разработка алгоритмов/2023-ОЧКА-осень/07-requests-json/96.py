import requests
import json
import os

url = "https://pcoding.ru/json/clients.json"
filename = os.path.basename(url)

response = requests.get(url)
response.encoding = "utf8"
line = response.text

data = json.loads(line)  # строку в объект
clients = data["clients"]  # выбрал поле clients
def get_dict(x): return {"name": x["name"], "age": x["age"], "gender": x["gender"]}
clients = map(lambda x: get_dict(x), clients)

s_name = sorted(clients, key=lambda x: x["name"], reverse=True)
s_age  = sorted(s_name, key=lambda x: x["age"])
clients = sorted(s_age, key=lambda x: x["gender"])

# clients = sorted(clients, key=lambda x: (x["gender"], -x["age"], x["name"]))  # работает
# clients = sorted(clients, key=lambda x: (-x["age"], x["name"]), reverse=True)  # работает

for cl in clients: print(cl["gender"], cl["age"], cl["name"])
