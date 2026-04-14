const express = require('express'); // npm i express
const csv = require('csvsync'); // npm i csvsync
const fs = require('fs');

const { HOST, PORT } = require('./config.json').hosting;
const filename = './json/users.csv'; // адрес локального хранилища

const app = express();
app.use(express.json()); // читать объекты в POST

app.post('/postUser', (req, res) => { // добавить в csv-файл новую запись
    let { firstName, lastName, rating } = req.body;  // данные берутся из объекта body
    // fs.appendFileSync(filename, `${firstName},${lastName},${rating}\n`, 'utf8');
    fs.appendFileSync(filename, `${[firstName,lastName,rating].join(',')}\n`, 'utf8');
    res.send(`добавили запись -> ${[firstName,lastName,rating].join(',')}\n`);
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
        res.json(jsonArray); // возвращает json - НЕ html-страницу
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));

/*
- тут проверка только через Thunder Client
- без web-форм и get и post

- объект для тестирования добавить в body:
    {
        "firstName": "Ирина",
        "lastName": "Кумова",
        "rating": "204"
    }

ЗАДАНИЕ:
- доделать html-форму для отображения таблицы с записями
- по примерам 01-04
*/