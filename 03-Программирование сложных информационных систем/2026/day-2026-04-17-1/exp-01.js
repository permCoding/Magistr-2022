const express = require('express');  // npm i express
const HOST = 'localhost', PORT = 3000;
const log = console.log;

const app = express();

app.get('/date', (req, res) => {
    log(req.url);
    const now = new Date();
    const dt = now.toLocaleDateString();   // "17.04.2026"
    res.send(`текущая дата ${dt}`);
});

app.get('/time', (req, res) => {
    log(req.url);
    const now = new Date();
    const tm = now.toLocaleTimeString();   // "15:30:45"
    res.send(`текущее время ${tm}`);
});

app.get('/', (req, res) => {
    log(req.url);
    res.send('GET/');
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
// Ctrl+C для остановки сервера
