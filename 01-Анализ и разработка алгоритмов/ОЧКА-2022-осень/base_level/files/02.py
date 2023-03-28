file_name = "./txt/01.txt"

file = open(file_name)
lines = file.readlines()
file.close()

print(lines)

print("11\t22\n33\t44")

