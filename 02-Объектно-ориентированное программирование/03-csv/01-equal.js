// equal

const _ = require('lodash'); // npm i lodash

let ex_01 = function () {
    let x = '1';
    let y = 1;
    console.log(x == y);
    console.log(x === y);    
};


let ex_02 = function () {
    let fruit1 = {name: 'apple'};
    let fruit2 = {name: 'apple'};
    console.log(fruit1 === fruit2); // false
    
    let fruit3 = fruit1;
    console.log(fruit1 === fruit3); // true

    let fruit4 = _.clone(fruit1);
    console.log(fruit1 === fruit4); // false
    fruit1['name'] += ' <= new'
    console.log(fruit1, fruit4);
};


let ex_03 = function () {
    let objs1 = [{name: 'apple'}, {name: 'pear'}];
 
    let objs2 = _.clone(objs1);
    // let objs2 = _.cloneDeep(objs1);
    console.log(objs1 === objs2); // false
    console.log(objs1 == objs2); // false    
    console.log(objs1[0] === objs2[0]); // true для _.clone()
    console.log(objs1[0] == objs2[0]); // true для _.clone()    
};


ex_01();
// ex_02();
// ex_03();
