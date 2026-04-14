const http = require('http');
const path = require('path');
const fs = require('fs');
const log = console.log;

const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;
const FAVICON = path.join(__dirname, 'public', 'favicon.ico'); // './public/favicon__.ico';
const html = fs.readFileSync('./views/select.html', {encoding:'utf8'});

const sendRandom = (req, res) => {
    let rndInd = Math.floor( stats.length * Math.random() );
    res.end( html.replace('POST', stats[rndInd]) ); // в нижней части отображается
}

const sendIcon = (res) => {
    res.setHeader('Content-Type', 'image/x-icon');
    fs.createReadStream(FAVICON).pipe(res); return;
}

const sendByNumber = (req, res) => {
    const [par, value] = req.url.split('?')[1].split('=');
    log(par, value);
    res.end( html.replace('POST', stats[value]) );
}

const sendSortByField = (req, res) => {
    const params = req.url.split('?')[1].split('&');
    log(`params = ${params}`);
    /* ЗАДАНИЕ ДЛЯ САМОСТОЯТЕЛЬНОГО ИСПОЛНЕНИЯ
    попробуйте самостоятельно сделать вывод и 
    заполнение таблицы отсортированными данными
    по аналогии с: res.end( html.replace('POST', stats[value]) );
    1) в select.html предусмотреть место для вставки сгенерированной таблицы
    2) тут генерировать отсортированную таблицу
    3) появляется только когда есть запрос на вывод отсортированных данных
    */
    res.end( `<H3> params = ${params} </H3>` );
}

const sendHtmlByQuery = (req, res) => {
    let query = req.url.split('?')[0].split('/').at(-1);
    log(`query = ${query}`)
    switch (query) {
        case 'getByNumber':
            log('getByNumber');
            sendByNumber(req, res);
            break;
        case 'sortBy':
            log('sortBy');
            sendSortByField(req, res);
            break;
        default:
            log('sendRandom');
            sendRandom(req, res);
            break;
    }
}

const sendHtml = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    log(req.url);
    if (req.url == '/') {
        sendRandom(req, res);
    } else {
        sendHtmlByQuery(req, res);
    }
}

const createResponse = (req, res) => {
    if (path.extname(req.url) === '.ico') {
        sendIcon(res);
    } else {
        sendHtml(req, res);
    }
}

http
    .createServer()
    .on("request", createResponse)  // на событие запроса сделай ответ
    .listen(port, host, () => log(`http://${host}:${port}`));

// http://localhost:3000/getByNumber?number=44
// http://localhost:3000/sortBy?field=id&direct=asc