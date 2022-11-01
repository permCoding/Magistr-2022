let line = "1,0,22,1,2,9,7";
let arr_s = line.split(',');

console.clear();

console.log(arr_s);

// map - берёт массив и возвр массив
// но все эл-ты преобр по одной функции
console.log(arr_s.map(x => Number(x)));

// filter - берёт массив и возвр массив
// отбирает по условию
console.log(
    arr_s
        .map(x => Number(x))
        .filter(x => x%2 > 0)
        .sort((a,b) => a-b)
);


// reduce - 
console.log(
    arr_s
        .map(x => Number(x))
        .filter(x => x%2 > 0)
        .sort((a,b) => a-b)
        .reduce((acc, cur) => { console.log(acc,cur); return acc+cur}, 0)
);

// reduce - 
console.log(
    arr_s
        .map(x => Number(x))
        .filter(x => x%2 > 0)
        .reduce((acc, cur) => acc+cur)
);