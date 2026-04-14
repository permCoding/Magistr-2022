const express = require('express'); // npm i express
const csv = require('csvsync'); // npm install csvsync
const fs = require('fs');

const { HOST, PORT } = require('./config.json').hosting;
const filename = './json/users.csv'; // адрес локального хранилища

const log = console.log;

const app = express();
app.set('view engine', 'ejs'); // шаблонизатор - npm i ejs
app.use('/css', express.static('css')); // путь к статичным файлам
app.use(express.json()); // читать объекты в POST
app.use(express.urlencoded({ extended: true })); // объекты с ejs-шаблона

app.post('/postUser', (req, res) => {
    let { firstName, lastName, rating } = req.body;
    fs.appendFileSync(filename, `${firstName},${lastName},${rating}\n`, 'utf8');
    
    // - 01 -
    // res.send({ firstName, lastName, rating }); // для контроля
    // - 02 -
    res.redirect('/');
    // - 03 - доделать самостоятельно - вывод всех пользователей в таблицу на web-форме
    // res.render('getUsers.ejs', model);
});

app.get('/postUser', (req, res) => {
    res.render('postUser.ejs', { });
});

app.get(['/getUsers','/'], (req, res) => {
    const opts = {
        skipHeader: false,
        // headerKeys: ['column1', 'column2'],
        returnObject: true,
        delimiter: ',',
        trim: true
    };
    try {
        const csvData = fs.readFileSync(filename, 'utf8');
        const jsonArray = csv.parse(csvData, opts);
        res.json(jsonArray); // доделать самостоятельно - вывод всех пользователей в таблицу на web-форме
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

// задание: добавить поле gender, обработать с помощью radioButton - один из многих
// задание: добавить поле arrayDirects, обработать с помощью checkBox - многие из многих

/*
- объект для тестирования:
    {
        "firstName": "Ирина",
        "lastName": "Кумова",
        "rating": "204"
    }
- после доработки
    {
        "firstName": "Ирина",
        "lastName": "Кумова",
        "rating": "204",
        "gender": 0,
        "arrayDirects": [0,1,2]
    }

    let Directs = [
        "Информационные системы",
        "Прикладная информатика",
        "Программная инженерия"
    ]

    возможный вариант оформления csv-файла:  
Федя;Федотов;200;1;0,1,2


1) сделать web-форму для getUsers  
   - добавить кнопку перехода на postUser с методом GET  
2) доработать web-форму для postUser  
*/