/** объявим объект без класса и динамически добавим свойства */
const ex01 = () => {
    let obj = {}
    console.log(obj)
    
    obj.x = 12
    obj.y = 10
    console.log(obj)
    console.table(obj)

    // delete obj.x
    // delete obj["x"]
    let key_del = "x"
    delete obj[key_del]
    console.log(obj)
}

/** добавим метод */
const ex02 = () => {
    let obj = { "x": 12, "y": 10 }
    console.log(obj)

    obj.get_divmod = function () {
        let a = this.x, b = this.y
        return { 'div': int_div(a,b), 'mod': a%b }
    }
    console.log(obj)
    
    let result = obj.get_divmod(13, 4)
    console.log(result)
    
    let { div, mod } = result
    console.log(`div = ${div}, mod = ${mod}`)

    console.log(Object.keys(obj))
    console.log(Object.values(obj))
}

const int_div = (a, b) => Math.floor(a/b)

console.clear()
ex01()
// ex02()
