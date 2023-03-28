file_name = "./txt/01.txt"

file = open(file_name)
txt = file.read()
file.close()

print(txt)
