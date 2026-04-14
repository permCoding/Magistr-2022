// запуск из терминала или из редактора кода

let a = "100", b = "99";

if (a > b) {
    console.log(a);
} else {
    console.log(b); // почему 99 ?
}

a = Number(a);
b = Number(b);

if (a > b) {
    console.log("max = ", a);
} else {
    console.log("max = ", b); // почему 99 ?
}
