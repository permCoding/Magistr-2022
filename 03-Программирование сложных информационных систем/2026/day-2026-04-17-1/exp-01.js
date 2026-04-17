const express = require('express');  // npm i express
const HOST = 'localhost', PORT = 3000;
const log = console.log;

function getAnswer_1(param) {
    const now = new Date();
    if (param == 'date') {
        return 'Дата:' + now.toLocaleDateString();
    } else {
        return 'Время: ' + now.toLocaleTimeString();
    }
}

const getAnswer_2 = (param) => {
    const now = new Date();
    if (param == 'date') {
        return 'Дата:' + now.toLocaleDateString();
    } else {
        return 'Время: ' + now.toLocaleTimeString();
    }
}

const app = express();

app.get('/:param', (req, res) => {
    log(req.params.param);

    // if (req.params.param == 'date') {
    //     const answer = 'Дата:' + now.toLocaleDateString();
    // } else {
    //     const answer = 'Время: ' + now.toLocaleTimeString();
    // } // так не работает: область видимости answer ограничена {}

    // let answer; // объявили до scope
    // if (req.params.param == 'date') {
    //     answer = 'Дата:' + now.toLocaleDateString();
    // } else {
    //     answer = 'Время: ' + now.toLocaleTimeString();
    // }

    // let answer = req.params.param == 'date'? 'Дата:' + now.toLocaleDateString() : 'Время: ' + now.toLocaleTimeString();

    let answer = getAnswer_1(req.params.param);

    res.send(answer);
});

app.get('/', (req, res) => {
    log(req.url);
    res.send('GET/');
});

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
