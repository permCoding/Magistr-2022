const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;
const users = require('./json/users.json'); // данные пока прямо в управляющем файле
const log = console.log;

const getModel = (field, direct='asc') => {
    const d = direct == 'asc'? +1: -1;
    return { 
        "arrayUsers": [...users].sort((a, b) => a[field]>b[field]? d: -d) // нужна проверка типов
    }; // простая модель данных предметной области
}

const app = express();

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.get('/order/:field/:direct', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    let field = req.params.field; // нужна валидация
    let direct = req.params.direct; // нужна валидация ['asc','desc']
    res.render('users-04', getModel(field, direct));
});

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('users-04', { "arrayUsers": users });
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
{
    "firstName": "Женя",
    "lastName": "Попадалова",
    "rating": "192"
}
*/