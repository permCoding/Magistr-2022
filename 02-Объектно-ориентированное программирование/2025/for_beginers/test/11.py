import random

amount = 1000
numbers = [random.randint(0, 10000) for _ in range(amount)]
filename = "./files/numbers.txt"

# f = open(filename, "w", encoding="utf-8")
# text = ""
# for number in numbers:
#     text += f"{number}\n"
# f.write(text)
# f.close()

# with open(filename, "w") as file:
#     for number in numbers:
#         file.write(f"{number}\n")

lines = [f"{number}\n" for number in numbers]
with open(filename, "w") as file:
    file.writelines(lines)
