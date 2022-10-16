// создание объекта с помощью класса Object

let car = new Object();
console.log(car);

car.model = "Nissan Note";
car.color = "Gray";
car._year = 2012;

Object.defineProperty(car, "year", {
    set: function(value) {
        this._year = ((value>1900) && (value<2023))? value: 0;
    },
    get: function() {
        return this._year % 100;
    },
    enumerable: true,
    configurable: true
});

console.clear();
console.log(car);
car.year = 2021;
console.log(car);
console.log(`year = ${car.year}`);
