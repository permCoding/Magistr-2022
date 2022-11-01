const { reduce, filter } = require("lodash");

const get_powers_1 = (members) => {
    let arr_powers = [];
    for (let member of members) {
        for (let pow of member.powers) {
            if (arr_powers.indexOf(pow) < 0) {
                arr_powers.push(pow);
            }
        }
    }
    return arr_powers.sort();
}

const get_powers_2 = (members) => {
    let set_powers = new Set();
    for (let member of members) {
        for (let pow of member.powers) {
            set_powers.add(pow);
        }
    }
    return Array.from(set_powers).sort();
}

const get_powers_3 = (members) => {
    let arr_powers = [];
    for (let member of members) {
        for (let pow of member.powers) {
            arr_powers.push(pow);
        }
    }
    return Array.from(new Set(arr_powers)).sort();
}

const get_powers_4 = (members) => {
    let arr_powers = members
        .map(member => member.powers)
        .reduce((acc, cur) => [...acc, ...cur], []);
    return Array.from(new Set(arr_powers)).sort();
}

const comparator = (a, b, fields, directions) => {
    let dirs = directions.map(x => x === "asc"? +1: -1);
    if (a[fields[0]] === b[fields[0]]) { // a["age"]
        return dirs[1] * (a[fields[1]] > b[fields[1]]? +1: -1);
    } 
    return dirs[0] * (a[fields[0]] > b[fields[0]]? +1: -1);
}

module.exports = {
    get_powers: get_powers_4,
    comparator
}
