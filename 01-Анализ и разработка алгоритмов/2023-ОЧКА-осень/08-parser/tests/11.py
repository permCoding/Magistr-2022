import requests

url = "https://www.tiobe.com/tiobe-index/"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

print(line)
