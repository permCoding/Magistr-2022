# import requests  # pip install requests
from requests import get
from bs4 import BeautifulSoup as BS  # pip install beautifulsoup4
import json

# часть 1
url = "https://www.tiobe.com/tiobe-index/"
html = get(url).text

# часть 2
soup = BS(html, "html.parser")
table = soup.find("table", id="top20")  

rows = table.find("tbody").find_all("tr")  # list of rows

langs = []
for row in rows:
    tds = row.find_all("td")
    lang = [tds[0].text, tds[1].text, tds[4].text, tds[5].text, tds[6].text]
    langs.append( lang )

# часть 3
objs = []
for lang in langs:
    obj = {
        "curr": int(lang[0]),
        "prev": int(lang[1]),
        "pro_lang": lang[2],
        "rating": float(lang[3].strip('%')),
        "change": float(lang[4].strip('%'))
    }
    objs.append( obj )
    
with open("./files/tiobe-index.json", "w", encoding='utf8') as f:
    json.dump(objs, f, indent=2)


"""
<table id="top20" class="table table-striped table-top20" name="myTable">
    <thead>
        <tr>
            <th style="width: 15%">Oct 2025</th>
            <th style="width: 15%">Oct 2024</th>
            <th title="Difference compared to last year" style="width: 15%">Change</th>
            <th style="width: 25%" colspan="2">Programming Language</th>
            <th style="width: 15%">Ratings</th>
            <th title="Difference compared to last year" style="width: 15%">Change</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Python.png" alt="Python page" style="vertical-align:middle"></td>
            <td>Python</td>
            <td>24.45%</td>
            <td>+2.55%</td>
        </tr>
    
    
    
    <tr><td>2</td><td>4</td><td><img src="/wp-content/themes/tiobe/tpci/images/up.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/C.png" alt="C page" style="vertical-align:middle"></td><td>C</td><td>9.29%</td><td>+0.91%</td></tr><tr><td>3</td><td>2</td><td><img src="/wp-content/themes/tiobe/tpci/images/down.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/C__.png" alt="C++ page" style="vertical-align:middle"></td><td>C++</td><td>8.84%</td><td>-2.77%</td></tr><tr><td>4</td><td>3</td><td><img src="/wp-content/themes/tiobe/tpci/images/down.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Java.png" alt="Java page" style="vertical-align:middle"></td><td>Java</td><td>8.35%</td><td>-2.15%</td></tr><tr><td>5</td><td>5</td><td></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/C_.png" alt="C# page" style="vertical-align:middle"></td><td>C#</td><td>6.94%</td><td>+1.32%</td></tr><tr><td>6</td><td>6</td><td></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/JavaScript.png" alt="JavaScript page" style="vertical-align:middle"></td><td>JavaScript</td><td>3.41%</td><td>-0.13%</td></tr><tr><td>7</td><td>7</td><td></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Visual_Basic.png" alt="Visual Basic page" style="vertical-align:middle"></td><td>Visual Basic</td><td>3.22%</td><td>+0.87%</td></tr><tr><td>8</td><td>8</td><td></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Go.png" alt="Go page" style="vertical-align:middle"></td><td>Go</td><td>1.92%</td><td>-0.10%</td></tr><tr><td>9</td><td>10</td><td><img src="/wp-content/themes/tiobe/tpci/images/up.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Delphi_Object_Pascal.png" alt="Delphi/Object Pascal page" style="vertical-align:middle"></td><td>Delphi/Object Pascal</td><td>1.86%</td><td>+0.19%</td></tr><tr><td>10</td><td>11</td><td><img src="/wp-content/themes/tiobe/tpci/images/up.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/SQL.png" alt="SQL page" style="vertical-align:middle"></td><td>SQL</td><td>1.77%</td><td>+0.13%</td></tr><tr><td>11</td><td>9</td><td><img src="/wp-content/themes/tiobe/tpci/images/down.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Fortran.png" alt="Fortran page" style="vertical-align:middle"></td><td>Fortran</td><td>1.70%</td><td>-0.10%</td></tr><tr><td>12</td><td>29</td><td><img src="/wp-content/themes/tiobe/tpci/images/upup.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Perl.png" alt="Perl page" style="vertical-align:middle"></td><td>Perl</td><td>1.66%</td><td>+1.10%</td></tr><tr><td>13</td><td>17</td><td><img src="/wp-content/themes/tiobe/tpci/images/upup.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/R.png" alt="R page" style="vertical-align:middle"></td><td>R</td><td>1.52%</td><td>+0.43%</td></tr><tr><td>14</td><td>15</td><td><img src="/wp-content/themes/tiobe/tpci/images/up.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/PHP.png" alt="PHP page" style="vertical-align:middle"></td><td>PHP</td><td>1.38%</td><td>+0.17%</td></tr><tr><td>15</td><td>16</td><td><img src="/wp-content/themes/tiobe/tpci/images/up.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Assembly_language.png" alt="Assembly language page" style="vertical-align:middle"></td><td>Assembly language</td><td>1.20%</td><td>+0.07%</td></tr><tr><td>16</td><td>13</td><td><img src="/wp-content/themes/tiobe/tpci/images/down.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Rust.png" alt="Rust page" style="vertical-align:middle"></td><td>Rust</td><td>1.19%</td><td>-0.25%</td></tr><tr><td>17</td><td>12</td><td><img src="/wp-content/themes/tiobe/tpci/images/downdown.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/MATLAB.png" alt="MATLAB page" style="vertical-align:middle"></td><td>MATLAB</td><td>1.16%</td><td>-0.32%</td></tr><tr><td>18</td><td>14</td><td><img src="/wp-content/themes/tiobe/tpci/images/downdown.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Scratch.png" alt="Scratch page" style="vertical-align:middle"></td><td>Scratch</td><td>1.15%</td><td>-0.26%</td></tr><tr><td>19</td><td>24</td><td><img src="/wp-content/themes/tiobe/tpci/images/upup.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Ada.png" alt="Ada page" style="vertical-align:middle"></td><td>Ada</td><td>0.98%</td><td>+0.25%</td></tr><tr><td>20</td><td>21</td><td><img src="/wp-content/themes/tiobe/tpci/images/up.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Kotlin.png" alt="Kotlin page" style="vertical-align:middle"></td><td>Kotlin</td><td>0.98%</td><td>+0.01%</td></tr>
</tbody>
</table>
"""