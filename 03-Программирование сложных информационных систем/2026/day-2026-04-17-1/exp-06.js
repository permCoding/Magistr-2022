const express = require('express');
const HOST = 'localhost', PORT = 3000;
const log = console.log;

const menu = `
<a href="http://localhost:3000/dt">Обновить дату/время</a> <br>
<a href="http://localhost:3000/">НА ГЛАВНУЮ</a> <br>
<br>
Дата - @dt@ <br>
Время - @tm@ <br>
<br>
<input type="text" name="inputDate" placeholder="Дата" value="@dt@"> <br>
<input type="text" name="inputTime" placeholder="Время" value="@tm@">
`;

const app = express();

app.get('/dt', (req, res) => {
    const now = new Date();
    const obj = {
        "date": now.toLocaleDateString(),
        "time": now.toLocaleTimeString()
    }
    res.type('text/html');
    res.write(menu
        .replace(/@dt@/g, obj.date)
        .replace(/@tm@/g, obj.time)
    );
    res.send();
});

app.get('/', (req, res) => {
    res.type('text/html');
    res.write(menu);
    res.send();
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
