// UPDATE заменить номер куратора в группе

const ut = require('./ut05');
const _ = require('lodash');

let groups = ut.csv_to_json('./csv/groups.csv');

function update(arr_g, group, idCur) {
    let index = _.findIndex(arr_g, obj => obj.nameGr == group);
    arr_g[index].idCur = idCur;
}


update(groups, 'ПИнб-3', 1);

console.table(groups);
