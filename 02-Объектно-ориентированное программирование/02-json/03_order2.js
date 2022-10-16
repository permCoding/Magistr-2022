/** сортировка массива объектов users по параметрам
 * задача: 
 * сорт по полю `name` по возрастанию/убыванию  
 * и в группах по полю `age` по возрастанию/убыванию
*/

const _ = require('lodash');

const users = [
    { name: 'Оля',   age: 48 },
    { name: 'Борис', age: 34 },
    { name: 'Оля',   age: 40 },
    { name: 'Борис', age: 36 }
];

/** по одному параметру  
 * нативный метод и lodash
 * нативный метод - мутабельный
 * lodash - не мутабельный
 */
function _sortBy_1() {
    _
        .sortBy(users, obj => obj.name) // чистая функция
        .forEach(obj => console.log(obj));

    users // нативный метод сортировки от js
        .sort((a,b) => a.name > b.name? 1: -1) // не чистая
        .forEach(obj => console.log(obj));
}

/** lodash - по двум параметрам - sortBy  
 * обычный подход
 */
function _sortBy_2() {
    // new_a = users.slice(0); // неглубокое копирование
    let f_sort = (a,b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return b.age - a.age;
    }

    console.log(users.sort(f_sort)); // нативный способ js - он испортит исходный массив

    // console.log(_.sortBy(_.sortBy(users, obj => obj.name), obj => obj.age)); // не мутабельный
    // console.log(_.sortBy(_.sortBy(users, ['age']), ['name'])); // не мутабельный
    // console.log(_.sortBy( // для обратного порядка нужно повозиться
    //     _.reverse(_.sortBy(users, obj => obj.age)), obj => obj.name)
    // );
}

/** lodash - по двум параметрам - orderBy  
 * подход с параметрами сортировки  
 * и направлениями asc, desc  
 * в двух нотациях  
 */
function _orderBy_2() {
    console.log(_.orderBy(users, ['name','age'], ['asc','desc']));
    console.log(
        _(users)
            .orderBy(['name','age'], ['asc','desc'])
            .value()
    );
}


console.clear();
console.log('\n'.repeat(3));

// _sortBy_1();
// _sortBy_2();
_orderBy_2();

console.log('проверка на мутабельность:')
console.table(users); // проверка сохранения массива
