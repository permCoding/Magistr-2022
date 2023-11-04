class ParserTiobe {
    
    constructor() {
        let request = require('sync-request');
        let url = 'https://www.tiobe.com/tiobe-index/';
        let req = request('GET', url);
        this.#data = req.getBody('utf8');
    }

    get arrTiobe() {
        let array = this.#getArray(); // массив массивов
        return array.map(x => { // в массив объектов
            return {
                'id': x[0], 
                'lang': x[4], 
                'rat': x[5]}
        })
    }

    #data = null;

    #getArray = () => {
        let cheerio = require("cheerio");
        let $ = cheerio.load(this.#data);
        let arr = [];
        $('#top20 > tbody > tr')
            .each((_, elm) => {
                let tmp = [];
                $(elm).find('td').each((_,e) => tmp.push($(e).text()));
                arr.push(tmp);
            });
        return arr;
    }
}

module.exports = {
    ParserTiobe
}

/*
<table id="top20" class="table table-striped table-top20">
*/
