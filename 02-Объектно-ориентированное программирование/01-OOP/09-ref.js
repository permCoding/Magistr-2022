// объекты можно создавать без декларации класса
// объекты в js ссылочного типа данных

let source = {
    name: 'Alex',
    age: 22,
    
    // toString: () => `name: ${this.name}, age: ${this.age}`, // анонимные не работают
    // toString: function() { return `name: ${this.name}, age: ${this.age}`},
    toString() { return `name: ${this.name}, age: ${this.age}`; },
    valueOf() { return this.age; }
};

let target = source; // объекты копируются по ссылке

source.age += 1;

const ex_01 = function () {
    console.log(source['age']);
    console.log(source.valueOf());
    
    console.log(`source => ${source.toString()}`);
    console.log(`target => ${target.toString()}`);    
}

const ex_02 = (id) => {
    source.id = 2801; // поле в объект можно добавить "на лету" так
    console.log(source);
    console.log(target); // и оно будет доступно в "других" объектах
    
    target["avg"] = 4.2; // поле в объект можно добавить "на лету" и так тоже
    console.log(target);
    console.log(source); // и оно будет доступно в "других" объектах
    
    source.get_age = () => source.age; // можно добавить метод
    console.log(`age = ${target.get_age()}`); // и будет работать из другого объекта
}

console.clear();
// ex_01();
ex_02(666);
