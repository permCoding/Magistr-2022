Array.prototype.get_odd_items = function() {
    return this
        .map(x => Number(x))
        .filter(x => x%2 > 0)
        .sort((a,b) => a-b)
}

Array.prototype.sum_odd_items = function() {
    return this
        .map(x => Number(x))
        .filter(x => x%2 > 0)
        .reduce((acc, cur) => acc + cur)

        // .reduce( (acc, cur) => {
        //     console.log(acc , cur);
        //     return acc + cur;
        // }, 0 )
}

let line = "11 34 1 0 0 2 3 4 5";
let arr = line.split(' ');
console.log(arr.get_odd_items());
console.log(arr.sum_odd_items());

// map - на входе массив и на выходе массив
// filter - на входе массив и на выходе массив
// reduce - на входе массив и на выходе свёртка
