const http = require('http');
const path = require('path');
const fs = require('fs');

const stats = require("./json/statements.json").stats;
const port = 3000, host = 'localhost';
const FAVICON = path.join(__dirname, 'public', 'favicon.ico');
// const FAVICON = './public/favicon.ico';

const html = require('fs').readFileSync('./views/index.html', {encoding:'utf8'});

const getRndInd = () => Math.floor( stats.length * Math.random() );

const sendIcon = (res) => {
    res.setHeader('Content-Type', 'image/x-icon');
    fs.createReadStream(FAVICON).pipe(res); return;
}

const sendHtml = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    let url = req.url;
    let query = url.split('?')[1];
    if (query) {
        const [par, value] = query.split('=');
        if (par == 'number') {
            res.end( html.replace('POST', stats[value]) );
        }
    } else {
        res.end( html.replace('POST', stats[getRndInd()]) );
    }
} // http://localhost:3000/getByNumber?number=44

const createResponse = (req, res) => {
    if (path.extname(req.url) === '.ico') {
        sendIcon(res); // Ctrl+F5 - чтобы иконка прогрузилась
    } else {
        sendHtml(req, res);
    }
}

http
    .createServer()
    .on("request", createResponse)  // на событие запроса сделай ответ
    .listen(port, host, () => console.log(`http://${host}:${port}`));
