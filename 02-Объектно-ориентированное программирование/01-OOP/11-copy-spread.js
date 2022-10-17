// можно копировать с помощью оператора расширения
// копируются и поля и методы

let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name -> ${this.name}, age -> ${this.age}`
    }
} // исходный объект

let target = { 
    ...source, 
    email: "xxx@gmail.com"
}; // копируем поля объекта в цикле
 
source.age += 1;

console.log(`source => ${source.toString()}`);
console.log(`target => ${target.toString()}`);

for (let item in target) { // проверим перебором
    console.log(`${item}: ${target[item]}`);
} // копируются и поля и методы

for (let [key, value] of Object.entries(target)) { // проверим перебором
    console.log(`${key}: ${value}`);
} // копируются и поля и методы
