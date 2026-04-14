// node a01.js 12 34 9 56

const args = process.argv.slice(2);
const log = console.log;

const numbers = args.map(Number);

log(Math.max(...numbers));
