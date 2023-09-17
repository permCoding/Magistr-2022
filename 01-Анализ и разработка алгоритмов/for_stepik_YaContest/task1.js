/*
    на вход в программу подаются строки
    в каждой строке одно натуральное число
    найти максимальное нечётное число
    
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
        let res = Math.max(
            ...lines
                .map(x => Number(x))
                .filter(x => x%2 != 0)
        );
        console.log(res);
});