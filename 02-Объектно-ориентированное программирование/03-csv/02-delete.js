// DELETE
// задача объект из массива по признаку
// _.remove() и _.pullAt() - мутабельные

const ut = require('./ut00');
const _ = require('lodash');

/**
 * удалить первый найденный элемент из массива
 * @param {String[]} arr массив имён кураторов 
 * @param {String} name имя куратора 
 * @return {void} ничего не возвращает
 */
 function del_one(arr, name) {
    let index = _.findIndex(arr, item => item.nameCur === name);
    let obj = _.pullAt(arr, index);
    // let nums = [index, index+1];
    // let obj = _.pullAt(arr, ...nums);
    
    console.log(arr);
    console.log(obj); // тут кто был удалён
}

/**
 * удалить все элементы
 * @param {String[]} arr массив 
 * @param {String} name имя куратора 
 * @return {void} ничего не возвращает
 */
function del_all(arr, /**String*/ name) {
    let new_arr = _.remove(arr, item => item.nameCur === name);

    console.log(arr);
    console.log(new_arr); // тут кто был удалён
}


console.log('\x1Bc'); // очистить терминал

let array = ut.csv_to_json('./csv/curators.csv');
let nameCurator = 'Ухова'; // DELETE

// del_one(array, nameCurator);
del_all(array, nameCurator);


// = = = = = = = = = = = = = = 

// ver imperative
// for (let i = 0; i<array.length; i++) {
// 	if (array[i].nameCur === nameCurator) {
// 		array.splice(i, 1);
// 		break; // если нужно удалить всех с такой фамилией, то break убрать
// 	}
// }
// console.log(array);
