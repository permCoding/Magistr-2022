const express = require('express');
const log = console.log;
const { HOST, PORT } = { HOST: 'localhost', PORT: 3000 };
const users = require("./json/users.json"); // данные снаружи

const app = express();

app.use(express.json()); // для парсинга req.body
app.use(express.urlencoded({ extended: true })); // для парсинга form-data

app.use((req, res, next) => { // middleware
    log(req.method, req.url, req.params, req.query, req.body);
    next();
});

app.put('/users/updateUser/:id', (req, res) => { // положить новый объект поверх старого
    const id = req.params.id;
    const newDataUser = req.body;
    const ind = users.findIndex(u => u.id == id);
    users[ind] = newDataUser;
    res.status(201).json(users);
});

app.patch('/users/updateUser/:id', (req, res) => { // обновить некоторые поля объекта
    const id = req.params.id;
    const newDataUser = req.body;
    const ind = users.findIndex(u => u.id == id);
    users[ind] = Object.assign(users[ind], newDataUser); // обновить поля объекта
    res.status(201).json(users);
});

app.delete('/users/updateUser/:id', (req, res) => { // обновить некоторые поля объекта
    const id = req.params.id;
    const ind = users.findIndex(u => u.id == id);
    users.splice(ind, 1);
    // const newUsers = users.filter(user => user.id !== 2); // или удалить всех с таким значением
    res.status(201).json(users);
});

app.post('/users/addUser', (req, res) => { // создать (добавить) новый объект
    const { id, name } = req.body; // надо бы контролировать деструктуризацию
    // валидация
    const newUser = { id, name }; // тут могут быть другие настройки
    users.push(newUser); // users.push(req.body);
    res.status(201).json(users);
}); // http://localhost:3000/users/addUser

app.get('/users/order', (req, res) => { // req.query
    const field = req.query.field; // нужна вализация
    const direct = req.query.direct === 'asc'? +1: -1;
    
    // исходный массив не меняем [...users].sort( _______ ) если старый Node
    const sortedUsers = users 
        .toSorted((a, b) => a[field] > b[field]? +direct: -direct);

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

можно все виды запросов проверять через терминал через команду curl:

curl -X GET http://localhost:3000/users 

curl -X POST http://localhost:3000/users/addUser \
  -H "Content-Type: application/json" \
  -d '{ 
    "id": 1002,
    "name": "White Rabbit"
}'

curl -X POST http://localhost:3000/users/addUser \
  -H "Content-Type: application/json" \
  -d '{ "id": 1002, "name": "White Rabbit" }'

curl -X GET http://localhost:3000/users/2

curl -X PUT http://localhost:3000/users/updateUser/2 \
  -H "Content-Type: application/json" \
  -d '{"id":3,"name":"Millie"}'

curl -X PATCH http://localhost:3000/users/updateUser/2 \
  -H "Content-Type: application/json" \
  -d '{"name":"Millie"}'

curl -X DELETE http://localhost:3000/users/updateUser/2 
*/