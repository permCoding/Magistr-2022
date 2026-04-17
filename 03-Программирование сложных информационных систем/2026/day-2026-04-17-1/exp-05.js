const express = require('express');  // npm i express
const HOST = 'localhost', PORT = 3000;
const avtor = "Александр Смирнов";
const log = console.log;

const menu = `
<a href="http://localhost:3000/dt">Узнать дату</a> <br>
<a href="http://localhost:3000/tm">Узнать время</a> <br>
<a href="http://localhost:3000/in">Информация</a> <br>
<a href="http://localhost:3000/">НА ГЛАВНУЮ</a> <br>
<br>`;

const app = express();

app.use((req, res, next) => { // middleware - pipline 
    log(req.method, req.url);
    next();
});

app.get(['/date','/dt'], (req, res) => {
    const now = new Date();
    const obj = {
        "date": now.toLocaleDateString(),
        "time": now.toLocaleTimeString(),
        avtor
    }
    res.type('text/html');
    res.write(menu);
    res.write(JSON.stringify(obj, null, 2));
    res.send();
});

app.get(['/time','/tm'], (req, res) => {
    const now = new Date();
    const tm = now.toLocaleTimeString();   // "15:30:45"
    res.type('text/html');
    res.write(menu);
    res.write(`текущее время: <br> ${tm}`);
    res.send();
});

app.get(['/info','/in'], (req, res) => {
    res.type('text/plain');
    res.write(menu);
    res.write(`Автор проекта: \n\t${avtor}`);
    res.send();
});

app.get('/', (req, res) => {
    res.type('text/html');
    res.write(menu);
    res.send();
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
// Ctrl+C для остановки сервера

/*
curl -X GET http://localhost:3000/dt
curl -X GET http://localhost:3000/tm
curl -X GET http://localhost:3000/in 
*/