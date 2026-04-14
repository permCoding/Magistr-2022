let rating = require('./rating.json');

let strJSON = JSON.stringify(rating, null, 4);
console.log(strJSON);

rating.sort((a,b) => a.name>b.name? +1: -1);
console.table(rating)

// for (let feed of feeds) {
//     console.log(`${feed.name}`)
// }
