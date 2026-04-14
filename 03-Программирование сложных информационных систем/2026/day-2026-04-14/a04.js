const log = console.log;

const s1 = "12 56 34 78 333 56 9 10";

s1.split(" ").forEach((elm) => { log(elm) });

s1.split(" ").forEach((elm, i) => { log(i, elm) });

const s2 = "1101 111 10 100 10 1 0 1111";

s2
    .split(" ")
    .map(e => parseInt(e, 2))
    .forEach((elm, i) => { log(i, elm) });

/*
1) сделать map() преобразование в объекты:
0 { bin: '1101', dec: 13 }
2) вывести пообъектно в JSON
3) сложить все объекты в массив и вывести JSON
4) сохранить массив JSON в файл
5) прочитать JSON из файла и обработать
    require || fs readFileSync
    JSON stringify parse
*/
