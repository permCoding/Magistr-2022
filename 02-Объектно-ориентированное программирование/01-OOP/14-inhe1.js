// наследование как расширение одного класса другим
// https://learn.javascript.ru/class-inheritance

class Human {
    constructor(name) {
        this._name = name;
    }
    set name(line) { // свойство name
        this._name = line.trim();
    }
    get name() {
        return this._name.trim();
    }
}

class Student extends Human { // расширение класса
    set group(line) { // свойство name
        this._group = line.trim();
    }
    get group() {
        return "Учебная группа: " + this._group.trim();
    }
}


let student = new Student('Косолапов Петя');
console.log(student);

student.group = 'ПИб-31';
console.log(student);
console.log(student.name); // свойство
console.log(student.group); // свойство
