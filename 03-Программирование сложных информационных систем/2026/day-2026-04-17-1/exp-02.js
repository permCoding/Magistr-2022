const express = require('express');  // npm i express
const HOST = 'localhost', PORT = 3000;
const log = console.log;

// model - бизнес-логика приложения
const getAnswer = (param) => {
    const now = new Date();
    let answer;
    switch (param) {
        case 'date': 
            answer = 'Дата:' + now.toLocaleDateString(); 
            break;
        case 'time': 
            answer = 'Время: ' + now.toLocaleTimeString(); 
            break;
        default: 
            answer = 'Неизвестный параметр';
    }
    return answer;
}

const app = express();

// маршрутизация = роутинг + контроллер
app.get('/:param', (req, res) => {
    log(req.url, req.params.param);
    res.send( getAnswer(req.params.param) );
});

app.get('/', (req, res) => {
    log(req.url);
    res.send( 'GET/' );
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
