const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = []; // массив для хранения считываемых строк

rl.on('line', function(line){
    lines.push(line); // считать все строки в массив
});

rl.on('close', () => { // после окончания считывания обработать массив
    // тут ваше решение
    result = lines[0];
    console.log(result);
});
