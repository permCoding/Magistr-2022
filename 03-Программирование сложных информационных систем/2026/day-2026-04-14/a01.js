// запуск из терминала или из редактора кода

const a = "100", b = "99";

if (a > b) {
    console.log(a);
} else {
    console.log(b); // почему 99 ?
}

a = Number(a) // так нельзя - const
