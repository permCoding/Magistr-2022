class WorkArray {
    constructor(name_file, fields) {
        this.name_file = name_file;
        this.arr = this.select_json(fields)
        this.orderBy = require('lodash').orderBy; // npm i lodash
    }
    select_json = (fields) => {
        let clients = require(this.name_file).clients;
        return JSON.parse(JSON.stringify(clients, fields));
    }
    sorted = (fields, dirs) => {
        return this.orderBy(this.arr, fields, dirs);
    }
}

module.exports = {
    WorkArray
}
