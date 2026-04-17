const http = require('http');
const port = 3000, host = 'localhost';
const stats = require("./json/statements.json").stats;

const html = require('fs').readFileSync('./views/index.html', {encoding:'utf8'});

const getRndInd = () => Math.floor( stats.length * Math.random() );

const createResponse = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    let url = req.url;
    let query = url.split('?')[1];
    // http://localhost:3000/getByNumber?number=23  
    if (query) {
        const [par, value] = query.split('=');
        if (par == 'number') {
            res.end( html.replace('POST', stats[value]) );
        }
    } else {
        res.end( html.replace('POST', stats[getRndInd()]) );
    }
}

http
    .createServer()
    .on("request", createResponse)  // на событие запроса сделай ответ
    .listen(port, host, () => console.log(`http://${host}:${port}`));
