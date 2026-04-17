const express = require('express');
const ejs = require('ejs'); // npm i ejs
const path = require('path');
const rtrDT = require('./routers/routerDT');
const mdwDT = require('./middlewares/middlewareDT');

const HOST = 'localhost', PORT = 3000;

const app = express();

app.set('view engine', 'ejs'); // нужен когда НЕ указано расширение *.ejs
app.set('views', path.join(__dirname, 'views'));

app.use(mdwDT.logger);
app.use(mdwDT.setCharset);
app.use('/', rtrDT);
app.use(mdwDT.notFound);

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
