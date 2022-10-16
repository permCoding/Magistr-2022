// можно самостоятельно повторить копирование по отдельности
// копируются и поля и методы

function copy_object(obj) { // копируем содержимое объекта
	let obj_new = {};
	for (let key in obj) { // все параметры по отдельности в цикле скопируем
		obj_new[key] = obj[key];
	}
	return obj_new;
}

let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name -> ${this.name}, age -> ${this.age}`
    }
} // исходный объект

let target = copy_object(source); // копируем поля объекта в цикле
 
source.age += 1;

console.log(`source => ${source.toString()}`);
console.log(`target => ${target.toString()}`);

for (let item in target) { // проверим перебором
    console.log(`item: ${target[item]}`);
} // копируются и поля и методы
