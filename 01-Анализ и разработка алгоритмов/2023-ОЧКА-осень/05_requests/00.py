import requests
import json

url = "https://pcoding.ru/json/clients.json"

response = requests.get(url)
response.encoding = "utf8"
line = response.text

# num = 1000000
# print(bin(num)[2:])
# print(oct(num)[2:])
# print(num)
# print(hex(num)[2:])

# for smb in line[:20]:
#     print(ord(smb), hex(ord(smb))[2:])

"""
Методология%20научных%20иссл

32(10)
20(16)

10(16) = 
0 =  0
1 =  1
...
A = 10
...
E = 14  # E + 1 = F
F = 15  # F + 1 = 10
F + 1 = 10(16) = 16(10)
"""