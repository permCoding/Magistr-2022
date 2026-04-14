// запуск из терминала или из редактора кода

// var

let a = " 'a = ' 100 ", b = "99";

console.log(a);

a = '100';

if (a > b) {
    console.log(a);
} else {
    console.log(b); // почему 99 ?
}

console.log(1 == '1'); // true
console.log(1 === '1'); // false

// a = Number(a) // так нельзя - const
