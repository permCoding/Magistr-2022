import requests


def get_html(url):
    head = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0'
    }
    resp = requests.get(url, headers=head)
    resp.encoding = "utf8"
    return resp.text
