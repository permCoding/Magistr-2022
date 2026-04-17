const express = require('express');
const HOST = 'localhost', PORT = 3000;
const log = console.log;
const stats = require('./json/statements.json').stats;

const app = express();

// http://localhost:3000/12

app.get('/', (req, res) => {
    const num = 0;
    log(stats[num]);
    res.send(stats[num]);
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
