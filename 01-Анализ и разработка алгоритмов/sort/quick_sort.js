let quick_sort = (lst) => {
    if (lst.length < 2) { return lst }
    let base = lst[0];
    let lst_left = quick_sort(lst.filter(x => x < base));
    let lst_middle = lst.filter(x => x == base);
    let lst_right = quick_sort(lst.filter(x => x > base));
    return [...lst_left, ...lst_middle, ...lst_right]
}

console.clear();

count = 1000000;
const arr = Array(count)
    .fill(0)
    .map(() => Math.floor(1000*Math.random()));

console.log(arr.slice(0, 10));

console.time("sort");
// let s_arr = quick_sort(arr);
let s_arr = arr.sort((a,b) => a - b);
console.timeEnd("sort");

console.log(s_arr.slice(0, 10));

/* 
quick_sort  count   sek
python    1000000  5.2
js        1000000  0.8
py_native 1000000  0.2
js_native 1000000  0.4
*/
