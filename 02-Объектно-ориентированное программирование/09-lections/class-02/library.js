class Example {
    _arr = []; // массив объектов
    _tmp = [];
    // надо сделать клон из _arr и разместить его в _tmp
    // и дальше работать с ним
    // при каждом новом запросе от пользователя
    // исходный массив брать из _arr и клонировать в _tmp
    // это будет метод restore (рекурсивный)
    constructor(file_name, field) {
        this._json = require(file_name);
        if (field !== undefined) {
            this._arr = this._json[field];
        }
    }
    sorted_one = (field, direct) => {
        let dirt = direct === "asc"? +1: -1;
        return this
            ._tmp
            .sort((a,b) => dirt * (a[field] > b[field]? +1: -1));
    }
    sorted_test = () => {
        return this
            ._tmp
            .sort((a,b) => a.name > b.name? -1: +1)
            .sort((a,b) => a.age > b.age? +1: -1)
            .sort((a,b) => a.gender > b.gender? +1: -1);
    }
    _comparator = (a, b) => {
        if (a.gender === b.gender) {
            if (a.age === b.age) {
                return  a.name > b.name? -1: +1;
            }
            return a.age > b.age? +1 : -1;
        }
        return a.gender > b.gender? +1 : -1;
    }
    sorted = () => {
        return this._tmp.sort((a,b) => this._comparator(a,b));
    }
    select = (...fields) => {
        this._tmp = JSON.parse(JSON.stringify(this._arr, fields));
        // SELECT fields
        // WHERE - filtred 
        // ORDER BY ASC DESC
    }
    /*
    самостоятельно доделать методы
    INSERT
    UPDATE
    DELETE

    убрать все лишние, дублирующие методы
    добавить сортировку рекурсивную по нескольким полям
    */
}

module.exports = {
    Example
}