const express = require('express');
const { HOST, PORT } = { HOST: 'localhost', PORT: 3000 };
const users = require("./json/users.json"); // данные снаружи

const log = console.log;
const app = express();

app.use((req, res, next) => { // middleware
    log(req.params, req.query, req.body); // тут нет данных пока
    next();
});

app.get('/users', (req, res) => {   // метод GET
    res
        .status(200)
        .json(users);
}); // http://localhost:3000/users

app.post('/users/addUser', (req, res) => {   // метод POST
    // тут req.body недоступен, так как не включили parser
    res
        .status(201)
        .json({message: 'User created'});
}); // через ThunderClient отправляем POST запрос

// '/users/:id/:name/:len'
app.get('/users/:id', (req, res) => {
    log(req.params.id, req.query, req.body);
    const user = users.find(user => user.id == req.params.id); // нужна вализация
        // нестрогое сравнение, чтобы не переводить строку "2" в число 2
        // if (user) { } else { } // нужно проверять найденного
    res.json(user);
}); // http://localhost:3000/users/2
    // http://localhost:3000/users/group/pinb/2/qweqwweqw

app.get('/', (req, res) => {
    res.send('= USERS = ');
}); // http://localhost:3000/

app.listen(PORT, HOST, log(`http://${HOST}:3000/`));



/*    => CRUD-матрица
    эндпойнты: 
GET  /users             - получить список пользователей
POST /users/addUser     - создать нового пользователя
GET  /users/:id         - получить пользователя по id
GET  /                  - главная страница
*/