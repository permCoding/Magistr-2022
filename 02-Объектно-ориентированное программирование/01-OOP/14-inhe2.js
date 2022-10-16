// наследование как расширение
// перегрузка конструктора, функция super

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
    constructor(name, group) {
        name = name.split(' ')[0] + ' ' + name.split(' ')[1][0] + '.';
        super(name); // вызов конструктора базового класса
        this._group = group || 'ПИб-11'; // значение по умолчанию
    }    
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
