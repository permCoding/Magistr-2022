class WorkClients {
    constructor(name_file, fields) {
        this.clients = this.select_json(name_file, fields)
        this.orderBy = require('lodash').orderBy;
        this.wf = require("fs").writeFile;
    }
    select_json = (name_file, fields) => {
        let clients = require(name_file).clients;
        return JSON.parse(JSON.stringify(clients, fields));
    }
    get_sort_clients = (fields_for_sorted, directs) => {
        return this.orderBy(this.clients, fields_for_sorted, directs);
    }
    send_to = (name_file, list_sorted) => {
        let line = JSON.stringify(list_sorted, null, 4);
        this.wf(name_file, line, "utf8",  (error) => {
            if (error) throw err;
            console.log("Данные были записаны...");
        });
    }
}

module.exports = { WorkClients }
