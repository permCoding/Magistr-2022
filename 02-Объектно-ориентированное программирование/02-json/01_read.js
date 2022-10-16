const _ = require('lodash');
const fs = require('fs');

/** используем именованную функцию 
 * данные берём из файла СИНХРОННО
*/
function _reduce_sync() {
    let add_odd = (acc, next) => next%2 != 0? acc + next: acc;

    let fileContent = fs.readFileSync("./txt/data_1.txt", "utf8");
    let arr = fileContent
        .split('\n')
        .map(Number);
    console.log(_(arr).reduce(add_odd, 0)); // инициализировать начальное acc
}

/** данные берём из файла аСИНХРОННО 
 * callback функция
*/
function _reduce_async(func, file) {
    const print = function (error, data) {
        let arr = data
            .split('\n')
            .map(Number);
        let result = _(arr).reduce(func, 0);
        console.log(result);
    }
    fs.readFile(file, "utf8", print); // callback
    console.log("асинхронное чтение файла"); // сработает раньше
}

/** не используем переменные для хранения промежуточных рез-ов */
function _reduce_async_(func, file) {
    fs.readFile(file, "utf8", // асинхронное чтение файла
        function (error, data) { // callback функция - анонимная
            console.log(
                _(data.split('\n').map(Number)).reduce(func, 0)
            );
        }
    );
}


// _reduce_sync();

let sum1 = (acc, next) => next%2? acc + next: acc;
let sum2 = (acc, next) => next%2 == 0? acc + next: acc;

// _reduce_async(sum1, "./txt/data_1.txt");
_reduce_async_(sum2, "./txt/data_1.txt");
