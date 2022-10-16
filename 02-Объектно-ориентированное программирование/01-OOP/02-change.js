/** ES5 - повторяем имена */
const ex01 = () => {
    let a = 1, b = 2, c = 3
    obj = {
        a: a,
        b: b,
        c: c
    }
    console.log(obj)
}

/** ES6 - имена сами повторяются */
const ex02 = () => {
    let a = 1, b = 2, c = 3
    obj = {
        a,
        b,
        c
    }
    console.log(obj)
}

/** ES6 - деструктурирование 
 * импорт свойств объектов в переменные 
 * так можно делать и при импорте из модулей:
 * let { readFileSync, writeFileSync } = require('fs')
 */
const ex03 = () => {
    let obj = { a: 12, b: 10 }
    let { a, b } = obj
    console.log(`a = ${a}, b = ${b}`)

    obj = { a: 12, b: 10 }
    let { a: x, b: y } = obj // можно поменять имена
    console.log(`x = ${x}, y = ${y}`)

    let i, j; // если переменные были объявлены
    obj = { i: 12, j: 10 }; // тут нужна ;
    ({i, j} = obj) // чтобы эти () сработали
    console.log(`i = ${i}, j = ${j}`)
}

/** поэтому можно сразу определять функции */
const ex04 = () => {
    const obj = {
        sum(a, b)  { return a + b },
        mult(a, b) { return a * b }
    }

    console.log( obj.sum(12, 10) )
    console.log( obj.mult(12, 10) )
}

/** но стрелочные только через имена, чтобы была ссылка */
const ex05 = () => {
    const obj = {
        sum:  (a, b) => a + b,
        mult: (a, b) => a * b
    }

    console.log( obj.sum(12, 10) )
    console.log( obj.mult(12, 10) )
}

/** оператор spread (расширения) для объектов */
const ex06 = (key="new_key") => {
    let obj = { a: 1, b: 2, c: 3 }
    let { a, ...x } = obj;
    console.log(a, x)

    const func = function({ a, ...x }) {
        console.log(a, x)
    }
    func(obj)

    let obj1 = { a: 1, b: 2 }
    let obj2 = { ...obj1, c: 3 };
    console.log(obj2)
}

/** динамические ключи */
const ex07 = (key="new_key") => {
    let obj_m = key + '_m'
    const obj = {
        a: 12,
        [key + "_p"]: 10,
        [obj_m]: function (b) { return this.a + b }
    }

    console.log( obj )
    console.log( obj[obj_m](10) )
}

console.clear()
ex01()
ex02()
ex03()
ex04()
ex05()
ex06()
ex07()
