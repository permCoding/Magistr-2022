const express = require('express');
const ejs = require('ejs'); // npm i ejs
const rtrDT = require('./routers/routerDT');
const { notFound } = require('./controllers/controllerDT');
const HOST = 'localhost', PORT = 3000;

const app = express();

app.set('view engine', 'ejs'); // нужен когда НЕ указано расширение *.ejs

app.use((req, res, next) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    next();
});

app.use('/', rtrDT);

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
