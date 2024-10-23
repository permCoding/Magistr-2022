const memo = {};

function fibonaci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (memo[n] !== undefined) return memo[n];
    memo[n] = fibonaci(n - 1) + fibonaci(n - 2);
    return memo[n];
}

let n = 80; // 23416728348467684
console.log(fibonaci(n));
