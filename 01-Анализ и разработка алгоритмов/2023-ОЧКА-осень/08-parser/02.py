import requests

url = "https://www.tiobe.com/tiobe-index/"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

pos_a = line.index('<table id="top20" class="table table-striped table-top20">')
pos_a = line.index('<tbody>', pos_a)
pos_b = line.index('</tbody>')
tbody = line[pos_a:pos_b+8]
with open("./02.html", "w", encoding="utf8") as f:
    f.write(tbody)
