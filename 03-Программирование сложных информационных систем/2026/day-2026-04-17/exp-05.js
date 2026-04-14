const express = require('express');
const { HOST, PORT } = { HOST: 'localhost', PORT: 3000 };
const users = require("./json/users.json"); // данные снаружи

const log = console.log;
const app = express();

// эти два app.use() нужны для метода POST
// нам нужно передать через req.body - объект нового пользователя
app.use(express.json()); // для парсинга req.body
app.use(express.urlencoded({ extended: true })); // для парсинга form-data

// app.use((req, res, next) => { // middleware
//     log(req.protocol); log(req.method); log(req.url);
//     log(req.params); log(req.query); log(req.body);
//     next();
// });

app.post('/users/addUser', (req, res) => {
    log(req.body); // через ThunderClient отправляем POST запрос
    const { id, name } = req.body; // надо бы контролировать деструктуризацию
    // валидация
    const newUser = { id, name }; // тут могут быть другие настройки
    users.push(newUser); // users.push(req.body);
    res.status(201).json(users);
}); // http://localhost:3000/users/addUser

app.get('/users/order', (req, res) => { // req.query
    log(req.query);
    const field = req.query.field; // нужна вализация
    const direct = req.query.direct === 'asc'? +1: -1;
    
    // исходный массив не меняем [...users].sort( _______ ) если старый Node
    const sortedUsers = users 
        .toSorted((a, b) => a[field] > b[field]? +direct: -direct);
    log(sortedUsers); // для контроля

    res.status(200).json( sortedUsers );
}); // http://localhost:3000/users/order?field=id&direct=asc

app.get('/users/:id/:field', (req, res) => { // req.params
    // const idUser = req.params.id;
    const { id, field } = req.params;   log(`field = ${field}`);
    const user = users.find(user => user.id == id);
    res.status(200).json(user);
}); // http://localhost:3000/users/2
app.get('/users/:id', (req, res) => { // req.params
    const user = users.find(user => user.id == req.params.id);
    res.status(200).json(user);
});

app.get(['/users', '/'], (req, res) => { // массив путей
    res.json(users);
}); // http://localhost:3000/users  http://localhost:3000/

app.listen(PORT, HOST, log(`http://${HOST}:3000/`));

/*
для добавления нового пользователя через Thunder Client
{ 
    "id": 1002,
    "name": "White Rabbit"
}

ПОПРОБУЙТЕ переложить все или часть методов,
которые вы делали для классов Библиотеки, Пользователя и Книги
на приложение написаннное на Express
- пусть это будет задание к ЛАБОРАТОРКЕ
- данные передавать через адресную строку Браузера
- в прошлой Лабе передавали через строку Терминала
- в Express можно использовать: req.params, req.query, req.body
*/