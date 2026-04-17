const express = require('express');  // npm i express
const HOST = 'localhost', PORT = 3000;
const avtor = "Александр Смирнов";
const log = console.log;

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
    res.json(obj);
});

app.get(['/time','/tm'], (req, res) => {
    const now = new Date();
    const tm = now.toLocaleTimeString();   // "15:30:45"
    res.type('text/html');
    res.send(`текущее время: <br> ${tm}`);
});

app.get(['/info','/in'], (req, res) => {
    res.type('text/plain');
    res.send(`Автор проекта: \n\t${avtor}`);
});

app.get('/', (req, res) => {
    res.send('GET/');
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
// Ctrl+C для остановки сервера

/*
curl -X GET http://localhost:3000/dt
curl -X GET http://localhost:3000/tm
curl -X GET http://localhost:3000/in 
*/