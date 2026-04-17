const express = require('express');
const HOST = 'localhost', PORT = 3000;
const log = console.log;
const clients = require('./json/clients.json').clients;
const app = express();

app.get('/order/:field/:direct', (req, res) => {
    const { field, direct } = req.params; // direct: ['asc','desc']
    // log(clients);
    log(JSON.stringify(clients, ['age','name','gender'], 2));
    // log(JSON.stringify(clients, null, 2));
    res.json(clients);
}); // http://localhost:3000/order/age/desc

app.get('/', (req, res) => {
    res.send('send');
}); // http://localhost:3000/

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

//    \n    \r\n
