/** создание объекта с помощью функции */
let ex01 = () => {
    function GetObject(x, y) { // функция - конструктор объекта
        if (!new.target) throw "function without new"; // вызов без new
        this.x = x;
        this.y = y || 1; // так как на ноль делить нельзя - лучше сделать setter
        this.get_divmod = function() {
            let a = this.x, b = this.y;
            console.log(a, b);
            return { 'div': Math.floor(a/b), 'mod': a%b };
        }
    }
    
    const obj1 = new GetObject(7, 3);
    const obj2 = new GetObject(12, 10);
    obj2.y += 100; // проверка - объекты разные
    
    console.log(obj1);
    console.log(obj2);
    
    console.log(Object.keys(obj2));
    console.log(Object.values(obj2));
    
    console.log(obj1.get_divmod());    
}

/** создать статический метод - общий для всех объектов - 
 *  так экономнее - у всех объектов ссылка на один и тот же метод*/
let ex02 = () => {
    function GetObject(x, y) {
        if (!new.target) throw "function without new";
        this.x = x;
        this.y = y || 1; // так как на ноль делить нельзя - лучше сделать setter
    }
    GetObject.prototype.get_divmod = function() {
        let a = this.x, b = this.y;
        return { 'div': Math.floor(a/b), 'mod': a%b };
    }

    let arr = [
        new GetObject(7, 3),
        new GetObject(12, 10)
    ];
    
    arr.forEach((element, index) => {
       console.log(index, element.get_divmod());
    });
}

/** свой статический метод  */
let ex03 = () => {
    Array.prototype.indexElement = function(elm) {
        for (let i = 0, len = this.length; i < len; i++) {
            if (this[i] === elm) return i;
        }
        return -1;
    }
    let arr = [1,2,33,7,5,6,8];
    console.log(arr.indexElement(22));
    console.log(arr.indexElement(33));
}

console.clear();
// ex01();
ex02();
ex03();
