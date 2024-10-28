def is_palindrom(s):
    s = s.lower()
    r = ''
    for smb in s:
        if smb in '., ?!-:': continue
        r += smb
    return r == r[::-1]


s = 'А роза упала на лапу - Азора!..'
print(is_palindrom(s))

##print('А' == 'а')
##print(ord('А'), ord('а'))
##print('А'.lower() == 'а')
##print('А' == 'а'.upper())
