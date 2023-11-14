import requests, json


user = 'permCoding'
url = f'https://api.github.com/users/{user}/repos'
reps_json = requests.get(url).text
lst = json.loads(reps_json)

list_repo = [obj for obj in lst if obj['language'] == 'Python']
print(len(list_repo))

list_sorted = sorted(list_repo, key=lambda x: x["created_at"], reverse=True)

fields = ['data', 'name', 'lang', 'url', 'desc']
results = []
for repo in list_sorted[:5]:
    values = [
        repo['created_at'].split('T')[0], 
        repo['name'], 
        repo['language'], 
        repo['url'], 
        repo['description']
    ]
    # pairs = zip(fields, values)
    # dct = {pair[0]:pair[1] for pair in pairs}
    dct = dict(zip(fields, values))
    results.append(dct)

s = json.dumps(results, ensure_ascii=False, indent=4)
print(s)

# with open('results.json', 'w', encoding='utf8') as f:
#     print(s, file=f)
#     # json.dump(results, f, ensure_ascii=False, indent=4)
