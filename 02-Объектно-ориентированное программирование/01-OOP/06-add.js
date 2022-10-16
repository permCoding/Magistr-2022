// методы одного объекта в другой

let methods = {
    'increment': function () { this.value++; },
    'display' : function () { console.log(this.value); }
}; // не получится использовать стрелочные функции - на них нет reference

function add_methods(object, methods) {
    for (var name in methods) { // in для объектов
        object[name] = methods[name];
    }
};

console.clear();

const obj = { value: 3 };
// obj = {}; // так нельзя - объявлен как const

add_methods(obj, methods);

obj.display();  // "3"
obj.increment();
obj.display();  // "4"
