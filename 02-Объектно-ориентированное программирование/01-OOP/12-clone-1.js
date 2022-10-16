// npm install lodash
// неглубокое клонирование 

const _ = require('lodash');

let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name -> ${this.name}, age -> ${this.age}`
    }
};

let target = _.clone(source); // клонируем объект

source.age += 1;

console.log(`source => ${source.toString()}`);
console.log(`target => ${target.toString()}`);
