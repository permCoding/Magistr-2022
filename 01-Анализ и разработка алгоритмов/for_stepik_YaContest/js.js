/*
js
    на вход в программу подаются строки
    в каждой строке одно натуральное число
    найти максимальное нечётное число
*/

const lines = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let nums = lines.map(Number).filter(x => x%2);
console.log(Math.max(...nums));