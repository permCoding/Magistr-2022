const express = require('express'); // npm i express
const ejs = require('ejs'); // npm i ejs
const { HOST, PORT } = require('./config.json').hosting;
const { getSortedUsers, getUsers } = require('./models/model');
const log = console.log;

const app = express();

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.use((req, res, next) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    next();
}); // тут актуально - если по всем маршрутам html

app.get('/order/:field/:direct', (req, res) => {
    const { field, direct } = req.params.field; // нужна валидация
    res.render('users-04', getSortedUsers(field, direct));
});

app.get('/', (req, res) => {
    res.render('users-04', getUsers());
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
some user = 
            {
                "firstName": "Женя",
                "lastName": "Попадалова",
                "rating": "192"
            }
*/