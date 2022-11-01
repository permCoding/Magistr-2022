const http = require('http');

const server = http.createServer();


server.on("request", (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    console.log(req.url);
    switch (req.url) {
        case '/':
        case '/clients':
            let arr = require("./json/clients.json");
            res.statusCode = 200;
            res.write(JSON.stringify(arr, null, 4));
            res.end();
            break;
        case '/students':
            let csv = require("fs").readFileSync("./csv/students.csv", "utf8");
            res.statusCode = 200;
            res.write(csv);
            res.end();
            break;
        case '/data':
            res.statusCode = 301;
            res.setHeader('Location', '/clients');
            res.end();
            break;
        default:
            res.statusCode = 404;
            res.end("error path");
            break;
    }
});

server.listen(3000, (error) => {
    error? console.error(error): console.log(`http://localhost:3000`);
});

// server.listen(42037, (error) => {
//     error? console.error(error): console.log(`http://localhost:42037`);
// });
