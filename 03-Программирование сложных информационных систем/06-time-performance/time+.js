let get_fib = n => 
    n<2? 1: get_fib(n-2) + get_fib(n-1);


let results = [];
let fib;
let start;
let end;
let time;
let obj;

for (let n = 30; n < 40; n++) {
    start = new Date().getTime();
    fib = get_fib(n);
    end = new Date().getTime();
    time = (end - start) / 1000;
    obj = {
        "n": n,
        "fib": fib,
        "time": time
    }
    results.push(obj);
}

console.table(results);
