const express = require('express');
const ejs = require('ejs'); // npm i ejs
const { getDT } = require('./models/modelDT');
const HOST = 'localhost', PORT = 3000;

const app = express();

app.set('view engine', 'ejs'); // нужен когда НЕ указано расширение *.ejs

app.use((req, res, next) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    next();
});

app.get('/dt', (req, res) => {
    const model = getDT();
    res.render('date.ejs', model);
});

app.get('/', (req, res) => {
    const model = { "date": "", "time": "" };
    res.render('date.ejs', model);
});

app.use((req, res) => {
    res.status(404).send('Ошибка 404: Страница не найдена');
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
