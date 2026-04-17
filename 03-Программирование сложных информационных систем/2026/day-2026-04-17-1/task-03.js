const express = require('express');
const HOST = 'localhost', PORT = 3000;
const log = console.log;
const stats = require('./json/statements.json').stats;

const app = express();

app.get('/rnd', (req, res) => {
    // res.write(stats.length.toString() + '\n');
    const index = Math.floor(stats.length * Math.random());
    // 0.999999 => 99.99999 => 99
    // res.write();
    res.send(stats[index]);
}); // http://localhost:3000/rnd

app.get('/query', (req, res) => {
    log(req.query); // { "index": "12", "age": 28, "name": "Vasya"}
    res.send(stats[req.query.index]);
}); // http://localhost:3000/query?index=40

app.get('/:index', (req, res) => {
    const index = req.params.index;
    res.send(stats[index]);
}); // http://localhost:3000/12

app.get('/', (req, res) => {
    res.send(stats[0]);
}); // http://localhost:3000/

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*  
Задание 1:
- при загрузке страницы вывести на экран браузера
- первое сообщение из файла: ./json/statements.json

Задание 2:
- пользователь может указать номер сообщения, которое нужно
- вывести на экран браузера из файла: ./json/statements.json

Задание 3:
- при каждой перезагрузке страницы вывести на экран браузера
- новое случайное сообщение из файла: ./json/statements.json
*/
