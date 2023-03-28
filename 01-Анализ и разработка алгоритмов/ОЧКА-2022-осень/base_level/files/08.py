def get_lines(file_name, first_line=True):
    with open(file_name) as file:
        lines = file.readlines()
    par = 0 if first_line else 1 
    return [line.strip() for line in lines][par:]


def get_sum(line):
    lst = line.split(" ")
    nums = [int(s) for s in lst]
    return sum(nums)


file_name = "./txt/01.txt"
lines = get_lines(file_name, False)

rating = [get_sum(line) for line in lines]

print(rating)

i_mn = 0
for i in range(len(rating)):
    if rating[i] < rating[i_mn]:
        i_mn = i

print(f"номер магазина = {i_mn+1}; его доход = {rating[i_mn]}")
