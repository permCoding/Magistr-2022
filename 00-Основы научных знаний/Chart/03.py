import numpy as np
import matplotlib.pyplot as plt


def func_A(lst_x):
    return np.sin(lst_x)


def func_B(lst_x):
    return np.cos(lst_x)


def func_C(lst_x):
    return 1/3*np.sin(lst_x) + 2*np.cos(lst_x)


def func_D(lst_x):
    return -1. + np.log(lst_x) - 1/5*lst_x

fig, axes = plt.subplots()
axes.grid(True, linestyle='-.')
axes.tick_params(labelcolor='r', labelsize='medium', width=3)
axes.set_title("Сравнение функций")

lst_x = np.linspace(1., 3.*np.pi, 100)
plt.plot(lst_x, func_A(lst_x))
plt.plot(lst_x, func_B(lst_x))
plt.plot(lst_x, func_C(lst_x))
plt.plot(lst_x, func_D(lst_x), color="black", dashes=[6,2], linewidth=3)

plt.show()
