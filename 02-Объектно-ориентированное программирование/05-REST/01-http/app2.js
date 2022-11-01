const http = require('http');
const fs = require('fs');

const options = {
    hostname: 'rcoding.1gb.ru',
    port: 42037,
    path: '/students',
    method: 'GET'
}

const callback = (res) => {
    let line = '';
    res.on('data', (chunk) => {
        line += chunk;
    });
    res.on('end', () => {
        console.log(line);
        fs.writeFile("./csv/students.csv", line, 'utf8', (error) => {
                if (error) throw error;
                console.log('The file has been saved!');
            }
        );
    });
}

const req = http.request(options, callback);

req.end();
