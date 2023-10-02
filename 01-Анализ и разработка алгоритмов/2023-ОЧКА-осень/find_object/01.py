f = open(file="./abiturs.csv", mode='r', encoding='utf8')
lines = f.readlines()[1:]

records = []  # list
for line in lines:
    lst = line.strip().split(',')
    record = (int(lst[0]), lst[1], int(lst[2]))  # tuple
    # records.append(record)
    records += [record]
print(records)

def compare(rec):
    return rec[2]

# sorted_recs = sorted(records, key=lambda rec: rec[2], reverse=True)
# sorted_recs = sorted(records, key=compare)
# print(sorted_recs)

records.sort(key=compare)
print(records)
# yeild current
