import requests
import json

url = "https://pcoding.ru/json/clients.json"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

data = json.loads(line)
clients = data["clients"]

print(clients[0])

# json.loads
# json.load
# json.dumps
# json.dump