// клонирование объектов через строковое представление JSON
// JSON не хранит методы !!!

let source = { // инициализируем исходный объект
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name: ${this.name}, age: ${this.age}`
    }
}

for (let item in source) { // все поля и методы исходного объекта
    console.log(`item: ${source[item]}`);
}

let line = JSON.stringify(source); // объект в строку
console.log('line =', line);

let target = JSON.parse(line); // затем из строки собрать ДРУГОЙ объект
source.age += 1; // изменим значение поля в исходном объекте
console.log(target.age);

// проверим содержимое исходного объекта
console.log(`checking source => ${source.toString()}`); 
// есть все поля и метод toString работает

console.log(`checking target => ${target.toString()}`); // а тут метод toString пропал
console.log(`checking target => ${target}`); // и при интерполяции не работает
console.log('checking target =>', target); // работает нативный способ

for (let item in target) { // проверим перебором
    console.log(`item: ${target[item]}`);
}
