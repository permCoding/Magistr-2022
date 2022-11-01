// UPDATE заменить номер куратора в группе по имени

const ut = require('./ut05');
const _ = require('lodash');


function update(arr_g, arr_c, group, name) {
    let ic = _.findIndex(arr_c, obj => obj.nameCur == name);
    let idCur = arr_c[ic].id;
    let ig = _.findIndex(arr_g, obj => obj.nameGr == group);
    arr_g[ig].idCur = idCur;
}


let groups = ut.csv_to_json('./csv/groups.csv');
let curators = ut.csv_to_json('./csv/curators.csv');

update(groups, curators, 'ПИнб-3', 'Дуров');

console.table(groups);
