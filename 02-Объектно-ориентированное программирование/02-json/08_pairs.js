// из объекта в массив

const { isNumber } = require('lodash');
const _ = require('lodash');

function ex_01() {
    let colors = { "red": 4, "green": 2, "blue": 1, "black": 0 };
    _
        .toPairs(colors) // объект на пары
        .forEach(x => console.log(x)); 
    console.log(_.toPairs(colors)); // массив пар    
}

function ex_02() {
    let pairs = [
        ['id', 60156],
        ['name', 'ilon'], 
        ['city', 'Houston'], 
        ['age', 56],
        ['gender', true]
    ];
    let person = _.fromPairs(pairs); // из массива пар в объект
    console.log(JSON.stringify(person, null, 2));    
}

function ex_03() {
    let colors = { "red": 4, "green": 2, "blue": 1, "black": 0 };
    let arr = _.toPairs(colors).slice(0,2);
    console.log(arr.map(item => _.fromPairs([item])));    
}

function ex_04() { // массив объектов
    let men = {
        "id": 60156,
        "name": "ilon",
        "city": "Houston",
        "age": 56,
        "gender": true
    };
    let arr_objs = _
        .map(_.toPairs(men).filter(x => !isNumber(x[1])), 
            item => _.fromPairs([item])
        );
    console.log(arr_objs); 
    console.log(JSON.stringify(arr_objs, null, 2));
}

function ex_05() { // массив собрать в объект
    let men = {
        "id": 60156,
        "name": "ilon",
        "city": "Houston",
        "age": 56,
        "gender": true
    };

    let arr_objs = _
        .map(_.toPairs(men).filter(x => !isNumber(x[1])), 
            item => _.fromPairs([item])
        );
    console.log(arr_objs); // массив объектов в одно поле

    let obj1 = _
        .reduce(arr_objs, (acc, cur) => _.assign(acc, cur),  {});
    console.log(obj1);

    let obj2 = Object.assign({}, ...arr_objs);
    console.log(obj2);
}

console.clear();
ex_01();
// ex_02();
// ex_03();
// ex_04();
// ex_05();

let arr = require('./json/mens.json')
console.log(arr)
