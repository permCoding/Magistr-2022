from random import randint as r
import sys


def merge(left, right):
    if len(left) < 1 or len(right) < 1:
        return left + right
    else:
        if left[0] < right[0]:
            amount[0] += 1
            return [left[0]] + merge(left[1:], right)
        else:
            amount[1] += 1
            return [right[0]] + merge(left, right[1:])
    

def sort_merge(lst):
    if len(lst) < 2:
        return lst
    else:
        mid = len(lst) // 2
        left = sort_merge(lst[:mid]) 
        right = sort_merge(lst[mid:])
        return merge(left, right)


sys.setrecursionlimit(32000)

count = 2000
lst = [r(0, 1000000) for _ in range(count)]
amount = [0, 0]
print(sort_merge(lst)[:10])
print(amount)
