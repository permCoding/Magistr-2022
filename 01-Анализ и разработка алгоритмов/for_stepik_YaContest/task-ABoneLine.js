/*
    на вход в программу подаётся одна строка
    в строке через пробел записаны два натуральных числа
    найти сумму чисел

    для остановки ввода нажмите Ctrl+C
*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = []; // массив для хранения считываемых строк

rl
    .on('line', line => lines.push(line)) // считать все строки в массив
    .on('close', () => { // после окончания считывания обработать массив
        let arr = lines[0].split(' ');
        console.log(Number(arr[0]) + Number(arr[1]));
});
