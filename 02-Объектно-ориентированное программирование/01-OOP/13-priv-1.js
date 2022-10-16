// конструктор и акцессоры
// защищённые поля и методыс префиксом _
// приватные, но по соглашению
// если есть только getter, то 
// поле доступно только для чтения

class Student {
    constructor(line) {
        this._name = line; // поле _name
    }
    set name(line) { // свойство name
        this._name = line.trim();
    }
    get name() {
        return this._name.trim();
    }
}

console.clear();

let stud = new Student('    Петрович ');
console.log(stud); // через конструктор

stud.name = ' Петро ';
console.log(stud); // через свойство

stud._name = ' Петро ';
console.log(stud); // через поле - оно public

console.log(stud.name); // через свойство

console.log(stud._name); // через поле
