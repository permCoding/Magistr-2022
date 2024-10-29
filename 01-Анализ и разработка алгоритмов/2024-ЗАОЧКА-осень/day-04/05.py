def is_palindrom(s):
    s = s.lower()
    r = ''
    for smb in s:
        if smb in '., ?!-:': continue
        r += smb
    b = True
    for i in range(len(r)//2):
        if r[i] != r[-1-i]:  # 0 -1   1 -2
            b = False
    return b


s = 'А роза упала на лапу - Позора!..'
print(is_palindrom(s))

##print('А' == 'а')
##print(ord('А'), ord('а'))
##print('А'.lower() == 'а')
##print('А' == 'а'.upper())
