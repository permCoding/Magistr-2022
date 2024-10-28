def get_1(arr):
    i = 0
    while arr[i] is not None:
        i = i + 1
    return i

def get_2(arr):
    i = 0
    while arr[i]:
        i = i + 1
    return i

arr = [0,1,2,3,4,None,5,6,7,8,9]
print(get_1(arr))
print(get_2(arr))
