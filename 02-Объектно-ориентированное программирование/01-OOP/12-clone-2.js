// npm install lodash
// неглубокое клонирование 

const _ = require('lodash');

let source = {
    id: 102,
    name: 'Alex',    
    private: {
        age: 22,
        gender: true
    }
};

console.clear();

let target = _.clone(source); // клонируем объект

source.id += 1; // это поле стало независимым
source.private.age = 50; // элементы поля типа объект остались зависимы
source.private.gender = false; // элементы поля типа объект остались зависимы

console.log('source =', source);
console.log('target =', target); // тут тоже поменялись значения
