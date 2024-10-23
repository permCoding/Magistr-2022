const memo = {};

function fibonaci(n) {
    if (n === 0n) return 0;
    if (n === 1n) return 1;
    if (memo[n] !== undefined) return memo[n];
    memo[n] = fibonaci(n - 1n) + fibonaci(n - 2n);
    return memo[n];
}

let n = 80n; // 23416728348467684
console.log(fibonaci(n));
