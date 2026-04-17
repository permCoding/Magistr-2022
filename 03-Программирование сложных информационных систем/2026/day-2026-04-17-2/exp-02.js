const express = require('express');
const log = console.log;

const HOST = 'localhost', PORT = 3000; // ver.1

// const { HOST, PORT} = require('./config.json').develop; // ver.2

// .env  // ver.3
// require('dotenv').config();       // npm i dotenv
// require('dotenv').config({ path: './config/.env' }); // можно менять путь
// const HOST = process.env.HOST || "localhost";
// const PORT = process.env.PORT || 3000;

const app = express();

// начало секции маршрутизации
app.get('/users', (req, res) => {
    log(req.protocol, req.ip, req.method, req.url); // убрать в middleware
    res.json([{id: 1, name: 'Alice'}, {id: 2, name: '_Bob'}]); // API web-service
});  // эндпойнт: GET /users    => http://localhost:3000/users

app.get('/', (req, res) => {
    log(req.protocol, req.ip, req.method, req.url); // убрать в middleware
    res.type('html');
    // res.type('text/plain');
    res.write('82364923847 2 8237423 \n');
    res.write('82364923847 <br> 2 8237423 ');
    res.write('823649<br>23847 \n 2 8237423 ');
    res.send();
});  // эндпойнт: GET /         => http://localhost:3000/
// окончание секции маршрутизации

// app.listen(PORT);

// app.listen(PORT, HOST);

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

// const print_sersver = () => log(`http://${HOST}:${PORT}/`);
// app.listen(PORT, HOST, print_sersver);

/* 
- содержимое файла .env - он не загружается на GitHub
# .env
PORT=3000
HOST=localhost

- можно загружать разные файлы в зависимости от окружения

---  

- свойства объекта request:  
req.params	    Параметры маршрута	/user/:id → req.params.id
req.query	    GET-параметры	    ?page=1 → req.query.page
req.body	    Тело запроса (POST/PUT)	{ name: "John" }
req.headers	    Все заголовки	req.headers['user-agent']
req.ip	        IP клиента	192.168.1.1
req.method	    HTTP метод	GET, POST
req.url	        Полный URL	/users?page=1
req.path	    Путь без параметров	/users
req.cookies	    Куки (с cookie-parser)	req.cookies.sessionId
req.get()	    Получить заголовок	req.get('Content-Type')
req.is()	    Проверить тип контента	req.is('json')
*/