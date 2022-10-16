// npm install lodash
// глубокое клонирование 

const _ = require('lodash');

let source = {
    id: 102,
    name: 'Alex',    
    private: {
        age: 22,
        gender: true
    }
};

let target = _.cloneDeep(source); // клонируем объект

source.id += 1; // все поля независимы
source.private.age = 50; // все поля независимы
source.private.gender = false; // все поля независимы

console.log('source =', source);
console.log('target =', target);
