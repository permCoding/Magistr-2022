// запуск из терминала или из редактора кода
const log = console.log; // alias

const { id, firstName } = {
    "id": 1,
    "firstName": "John",
    "age": 30
}; // деструктуризация
log(id, firstName);

const arr = ["100", "99", "0", 23, 45 ];
const [a, b] = arr; // деструктуризация

if (+a > +b) {
    log(`max = ${a}`);
} else {
    log(`max = ${b}`);
}

log(`max = ${+a>+b? a: b}`);

log(`max = ${Math.max(12,44,"77",0)}`); // .max() только для чисел

log(`max = ${Math.max(...arr)}`); // .max() только для чисел
// .max() автоматически преобразует эл-ты .toNumber()

const lines = ["ABC", "OPR", "KLM"];
log(`max = ${Math.max(...lines)}`); // NaN
// строки не приводятся к числам

// найти из строк максимальную:
log(lines.toSorted());
log(lines.sort().at(-1));

const array = ["qwe", "12", "0", "wjdf bw il"];
const f = (a, b) => a.length > b.length? +1: -1;
log(array.sort(f));

log(array.sort((a, b) => b.length - a.length));

// log(lines.reduce((a, b) => a > b ? a : b)); // "OPR"

// lambda elm: len(elm) // py

`
qwedq
qweqw
qwe
`