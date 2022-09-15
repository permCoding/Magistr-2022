import matplotlib.pyplot as plt
import numpy as np

plt.style.use('seaborn')

x = np.linspace(-5, 5, 1000)  # точность зависит от кол-ва точек
y = 9.5*x**3 - 500

_, axes = plt.subplots()
axes.vlines(0, y.min(), y.max(), color='orange', lw=1)
axes.hlines(0, x.min(), x.max(), color='orange', lw=1)
axes.plot(x, y, color='darkviolet', lw=1)

plt.show()