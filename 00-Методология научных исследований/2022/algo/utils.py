from sys import platform
from os import system


def clear():    
    if platform == "linux" or platform == "linux2":
        system('clear')
    elif platform == "win32":
        system('cls')
    elif platform == "darwin":
        pass  # OS X
    else:
        pass
