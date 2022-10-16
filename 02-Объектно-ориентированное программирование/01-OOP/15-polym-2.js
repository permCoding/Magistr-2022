// полиморфизм
// как переопределение метода
// один метод - разные реализации
// но можем переопределять не полностью, 
// а дополнить родительский метод

class Figure {
    constructor(len, name="Линия") {
        this.name = name;
        this.len = len;
    }
    get_area() { return this.len };
    info() { console.log(`Фигура ${this.name}; Размер = ${this.len}`); }
}

class Square extends Figure { // расширение класса
    constructor(len) {
        super(len, "Квадрат");
    }
    get_area() { return Math.pow(this.len, 2); }
    info() {
        super.info();
        return `Площадь фигуры = ${this.get_area()}`;
    }
}

class Circle extends Figure { // расширение класса
    constructor(len) {
        super(len, "Круг");
    }
    get_area() { return (Math.PI * Math.pow(this.len, 2)).toFixed(2) };
    info() {
        super.info();
        return `Площадь фигуры = ${this.get_area()}` 
    };
}

console.clear();
let figa = new Circle(10);
console.log(figa.info());
let figb = new Square(10);
console.log(figb.info());
