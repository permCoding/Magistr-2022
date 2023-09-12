from sys import platform, getrecursionlimit, setrecursionlimit
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


def set_limit(limit=2000):
    setrecursionlimit(limit)


def get_limit():
    return getrecursionlimit()
