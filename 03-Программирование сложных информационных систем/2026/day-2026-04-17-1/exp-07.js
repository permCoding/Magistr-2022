const express = require('express');
const ejs = require('ejs'); // npm i ejs
const HOST = 'localhost', PORT = 3000;
const log = console.log;

const menu = `
<a href="http://localhost:3000/dt">Обновить дату/время</a> <br>
<a href="http://localhost:3000/">НА ГЛАВНУЮ</a> <br>
<br>
<input type="text" name="inputDate" placeholder="Дата" value="<%= date %>"> <br>
<input type="text" name="inputTime" placeholder="Время" value="<%= time %>">
`;

const app = express();

app.get('/dt', (req, res) => {
    const now = new Date();
    const obj = {
        "date": now.toLocaleDateString(),
        "time": now.toLocaleTimeString()
    }
    res.set('Content-Type', 'text/html; charset=utf-8');
    const html = ejs.render(menu, obj);    
    res.send(html); // отправим клиенту заполненную html-страницу
});

app.get('/', (req, res) => {
    const obj = { "date": "", "time": "" };
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(ejs.render(menu, obj)); // отправим клиенту заполненную html-страницу
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
