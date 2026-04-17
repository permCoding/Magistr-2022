const express = require('express');
const log = console.log;
const HOST = 'localhost', PORT = 3000;
const users = [ {id: 1, name: 'Alice'}, {id: 2, name: 'Bob'} ];

const app = express();

app.use((req, res, next) => { // middleware
    log(req.protocol, req.ip, req.method, req.url);
    next();
});

app.get('/users', (req, res) => { res.json(users); });

app.get('/', (req, res) => { res.send('<b>= USERS = </>'); });

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

// ThunderClient