// создание объектов через декларацию класса

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    valueOf = () => this.age;
    toString = () => `name: ${this.name}, age: ${this.age}`;
}

let students =  [
    new Student('Петров', 21),
    new Student('Сидоров', 19),
    new Student('Иванов', 22)
];

students.forEach(st => console.log(st));
students.forEach(st => console.log(st.toString())); // переопределили метод

console.log(students[0] > students[1]? 'старше': 'младше');
console.log(students[1] > students[2]? 'старше': 'младше');

students.sort((a, b) => a.age - b.age);

students.forEach(st => console.log(st.toString()));
