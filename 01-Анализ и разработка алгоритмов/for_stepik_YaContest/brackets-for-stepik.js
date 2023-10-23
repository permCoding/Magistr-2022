const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl
    .on('line', (input) => {
        const [X,Y,A,B] = input.split(' ').map(Number);
        const queue = [];
        let count = 0;
        queue.push(X);
        while (queue.length > 0){
            const curr = queue.shift();
            if (curr === Y) { count++; continue; }
            const x1 = curr+A, x2 = curr+B;
            if (x1 <= Y) { queue.push(x1); }
            if (x2 <= Y) { queue.push(x2); }
        }
        console.log(count);
    })
    .on('close', () => {
        process.exit(0);
    })

