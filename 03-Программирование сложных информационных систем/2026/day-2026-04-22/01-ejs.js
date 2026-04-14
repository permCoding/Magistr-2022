const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;
const user = require('./json/user.json');
const view = require('fs').readFileSync('./views/01.html', 'utf-8');

const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(ejs.render(view, user));
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));

// express()
//     .get('/', (req, res) => {
//         res.set('Content-Type', 'text/html; charset=utf-8');
//         res.send(ejs.render(view, user));
//     })
//     .listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));

// можно заменять содержимое шаблона и регулярками и просто методами JS 