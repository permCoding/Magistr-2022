let get_fib = n => 
    n<2? 1: get_fib(n-2) + get_fib(n-1);

console.time("time");

for (let n=30; n<40; n++) {
    console.log(`${n} = ${get_fib(n)}`);
}

console.timeEnd("time");
