class Exam {
    _arr = [];  // исходный массив объектов из файла
    _tmp = [];  // его клон для хранения временных результатов
    constructor(file_name, field) {
        this._arr = require(file_name); // исходный массив объектов
        this.restore(); // клонирование _arr в _tmp
    }
    restore = () => {
        // тут сделать глубокое клонирование рекурсией
        this._tmp = this._arr; // вместо этого присваивания
    }
    select = (...fields) => {
        // выбрать из объектов в массиве только определённые поля
        this._tmp = JSON.parse(JSON.stringify(this._arr, fields));
        return this._tmp;
    }
    orderBy = (fields, directs) => {
        // тут добавить рекурсивный метод сортировки 
        // по полям и направлениям
        return this._tmp;
    }
    /*
        самостоятельно доделать методы
        INSERT - объект в массив
        UPDATE - изменить объект
        DELETE - удалить объект
    */
}

module.exports = {
    Exam
}