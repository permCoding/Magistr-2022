/*
    на вход в программу подаётся одна строка
    в строке через пробел записаны натуральные числа
    найти сумму чисел меньших  10
    
    для остановки ввода нажмите Ctrl+C
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = []; // массив для хранения считываемых строк

rl
    .on('line', line => lines.push(line))
    .on('close', () => {
        let res = lines[0]
            .split(' ')
            .map(x => +x)
            .filter(x => x < 10)
            .reduce((a,b) => a+b, 0);
        console.log(res);
});
