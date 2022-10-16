// полиморфизм
// фигура
// свойство Размер (сторона, радиус)
// метод Площадь
// наследники Круг, Квадрат, Треугольник
// переопределение метода Площадь
// один метод - разные реализации

class Figure {
    constructor(len, name="Линия") {
        this.name = name;
        this.len = len;
    }
    get_area = () => this.len;
    info = () => { 
        return `Фигура ${this.name}; Размер = ${this.len}` 
    };
}

class Square extends Figure { // расширение класса
    constructor(len) {
        super(len, "Квадрат");
    }
    get_area = () => { return Math.pow(this.len, 2); }
    info = () => { 
        return `Площадь фигуры ${this.name} = ${this.get_area()}` 
    };
}

class Circle extends Figure { // расширение класса
    constructor(len) {
        super(len, "Круг");
    }
    get_area = () => { return (Math.PI * Math.pow(this.len, 2)).toFixed(2) };
    info = () => { 
        return `Площадь фигуры ${this.name} = ${this.get_area()}` 
    };
}

let figs =  [
    new Square(5),
    new Circle(10),
    new Figure(100, "Отрезок")
];

console.table(figs);

for (let fig of figs) {
    console.log(fig.info());
}
