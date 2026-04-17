const express = require('express');
const HOST = 'localhost', PORT = 3000;
const log = console.log;
const filename = './json/numbers.txt';
const app = express();

app.get('/', (req, res) => {
    const lines = require('fs')
        .readFileSync(filename, 'utf-8')
        .split(/\r\n/g)
        .map(line => line.trim());

    // let arr = lines[1].split(' ').map(elm => Number(elm));
    let arr = lines[1].split(' ').map(Number);
    
    log(arr);
    // arr.sort((a,b) => a-b);
    log(arr);

    res.write(arr
        .toSorted((a,b) => a-b)
        .join('\n')
    );
    res.end();
}); // http://localhost:3000/

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

//    \n    \r\n
