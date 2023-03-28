const get_combs = (arr) => {
    const rec = (combo, deep) => {
        if (deep == arr.length) {
            // combs.push([...combo]);
            combs.push(combo.slice());
        }
        else {
            combo.push(arr[deep]);
            rec(combo, deep+1);
            combo.pop();
            rec(combo, deep+1);
        }
    }
    let combs = [];
    rec([], 0);
    return combs;
}

let arr = ['a', 'b', 'c', 'd'];
let result = get_combs(arr)
    .sort((a,b) => a.length - b.length);
console.log(result);
