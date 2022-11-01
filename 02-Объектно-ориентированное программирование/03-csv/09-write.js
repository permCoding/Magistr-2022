// UPDATE заменить номер куратора в группе

const _ = require('lodash');
const ut = require('./ut05');


function update(arr_g, group, idCur) {
    let ig = _.findIndex(arr_g, obj => obj['nameGr'] === group);
    arr_g[ig].idCur = idCur;
}


let path = './csv/';
let file_name = 'groups.csv';
let groups = ut.csv_to_json(path + file_name);

update(groups, 'ПИнб-3', 1);
ut.write_to_csv(groups, path + '_' + file_name);
