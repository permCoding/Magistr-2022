import matplotlib.pyplot as plt
import numpy as np

plt.style.use('seaborn')

x = np.linspace(-5, 5, 100)
y = 9.5*x**3 - 500

fig, axes = plt.subplots()

axes.plot(x, y, color='darkviolet', lw=4)
axes.vlines(0, y.min(), y.max(), color='orange', lw=2)
axes.hlines(0, x.min(), x.max(), color='orange', lw=2)

plt.show()