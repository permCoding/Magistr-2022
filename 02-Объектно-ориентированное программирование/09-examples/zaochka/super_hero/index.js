const { writeFileSync: wfs } = require("fs");
const _ = require("lodash");
const members = require("./json/super_hero.json").members;
const { get_powers, comparator } = require("./module");

console.clear();

let members_sort;

// 1 native js
members_sort = members
    .sort((a,b) => comparator(a,b,["age","secretIdentity"],["desc","asc"]));

// 2 lodash _(members) -> как в js
members_sort = _(members)
    .orderBy(["age", "secretIdentity"], ["asc", "asc"])
    .value();

// 3 lodash _.orderBy(members, ..) -> как в py
members_sort = _
    .orderBy(members, ["age", "name"], ["asc", "desc"])



wfs("./json/_super_hero.json", JSON.stringify(members_sort, null, 4));

// let arr_powers = get_powers(members);
// console.log(arr_powers, arr_powers.length);
