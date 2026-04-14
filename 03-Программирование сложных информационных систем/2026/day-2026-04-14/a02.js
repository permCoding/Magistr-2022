// запуск из терминала или из редактора кода

let a = "100", b = "99";

// a = Number(a);
// b = Number(b);

a = +a;
b = +b;

// a = parseInt(a);
// b = parseInt(b);

if (a > b) {
    console.log("max = ", a);
} else {
    console.log("max = ", b); // почему 99 ?
}

// console.log(a); // NaN