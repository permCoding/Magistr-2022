import matplotlib.pyplot as plt


def func(x):
    return 9.5*x**3 - 500


plt.style.use('seaborn')

left, right, count = -5, 5, 1000
x, step = left, (right - left) / count
lst_x, lst_y = [x], [func(x)]
while x < right:
    x += step
    lst_x.append(x)
    lst_y.append(func(x))

fig, axes = plt.subplots()
axes.vlines(0, min(lst_y), max(lst_y), color='orange', lw=2)
axes.hlines(0, min(lst_x), max(lst_x), color='orange', lw=2)
axes.plot(lst_x, lst_y, color='darkviolet', lw=4)

plt.show()
