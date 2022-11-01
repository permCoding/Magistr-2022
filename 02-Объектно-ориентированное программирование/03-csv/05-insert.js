// INSERT INTO hobby VALUES(..., ...)

const ut = require('./ut05');
const _ = require('lodash');


function insert_1(array, item) {
	let next = +array[array.length-1].id + 1;
	array.push(new ut.Hobby(next, item));
}


function insert_2(array, item) {
	let next = +array[array.length-1].id + 1;
	// array.push(new ut.Hobby(next, item));
	array.push(ut.Hobby_(next, item));
}


function insert_3(array, item) {
	let max_id = _(array).maxBy(item => item.id).id;
	let next = ++max_id;
	array.push(new ut.Hobby(next, item));
}


console.clear();

let hobbies = ut.csv_to_json('./csv/hobby.csv');
let hobby = 'sitcom';

// insert_1(hobbies, hobby);
// insert_2(hobbies, hobby);
insert_3(hobbies, hobby);

console.table(hobbies);
