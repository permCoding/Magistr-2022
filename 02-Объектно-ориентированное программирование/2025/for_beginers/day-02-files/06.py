n = 0
sm = 0
while n < 6:
    n += 1
    s = f"введите доход за {n}-й: "
    sm += int(input(s))
print(sm, sm/6)
