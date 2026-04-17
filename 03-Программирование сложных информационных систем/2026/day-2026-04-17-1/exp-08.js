const express = require('express');
const ejs = require('ejs'); // npm i ejs
const HOST = 'localhost', PORT = 3000;

const app = express();

app.set('view engine', 'ejs'); // нужен когда НЕ указано расширение *.ejs
   
app.get('/dt', (req, res) => {
    const now = new Date();
    const obj = {
        "date": now.toLocaleDateString(),
        "time": now.toLocaleTimeString()
    }
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('date.ejs', obj);
});

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('date.ejs', { "date": "", "time": "" });
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
