// запуск из терминала или из редактора кода
const log = console.log;

const arr = ["100", "99"];

const [a, b] = arr;

if (+a > +b) {
    log(`max = ${a}`);
} else {
    log(`max = ${b}`);
}

log(`max = ${+a>+b? a: b}`);

log(`max = ${Math.max(...arr)}`); // .max() только для чисел
// .max() автоматически преобразует эл-ты .toNumber()

const lines = ["ABC", "OPR", "KLM"];
log(`max = ${Math.max(...lines)}`); // NaN
// строки не приводятся к числам

// найти из строк максимальную:
log(lines.sort().at(-1));
log(lines.reduce((a, b) => a > b ? a : b)); // "OPR"
