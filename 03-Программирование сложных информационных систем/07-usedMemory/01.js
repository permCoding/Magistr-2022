const log = console.log

const ex_01 = () => {
    let arr = Array(2*1e6).fill("some string")
}

const ex_02 = () => {
    let str = "some string"
    let arr = Array(1*1e6).fill(str)
    arr[0] = "other string"
    log(arr.slice(0, 5))
}

const ex_03 = () => {
    let str = "some string"
    let arr = []
    var i
    for (i = 0; i < 1*1e5; i++) {
        arr.push( str )
    }
    arr[0] = "other string"
    log(arr.slice(0, 5))
}

const ex_04 = () => {
    let str = "some string"
    let arr = []
    for (let i = 0; i < 2*1e6; i++) {
        arr.push( str )
    }
}

const ex_05 = () => {
    let obj = { "str": "some string" }
    let arr = []
    for (let i = 0; i < 1*1e6; i++) {
        arr.push( obj )
    }
    arr[0].str = "other string"
    log(arr.slice(0, 5))
}

const ex_06 = () => {
    // external == 1 Mbyte
    // let arr = new Array(1*1e6) // 10.86 - 3.23 Mb = 7.6 Mb ... 1 byte * 1_000_000
    // let arr = new Uint8Array(1*1e6) // 1.9 - 1 Mb = 1 Mb ... 1 byte * 1_000_000
    // let arr = new Uint16Array(1*1e6) // 2.9 - 1 Mb = 2Mb ... 2 byte * 1_000_000
    // let arr = new Uint32Array(1*1e6) // 3.8 - 1 Mb = 3 Mb ... 4 byte * 1_000_000
    // let arr = new Float32Array(1*1e6) // 4.8 - 1 Mb = 3.8 Mb // arrayBuffers
    let arr = new Float64Array(1*1e6) // 8.6 - 1 Mb = 7.6 Mb // arrayBuffers
    // log(4 * 1*1e6 / 1024 / 1024)
}

// ex_01()
// ex_02()
// ex_03()
// ex_04()
// ex_05()
ex_06()

const used = process.memoryUsage()
log(Object.keys(used))
for (let key in used) {
    log(`${key} ${Math.round(used[key]/1024/1024*100)/100} MB`);
}

/*
Int8Array	Массив знаковых 8-битных целых чисел	new Int8Array([1, 2, 3, 4])
Uint8Array	Массив беззнаковых 8-битных целых чисел	new Uint8Array([1, 2, 3, 4])
Int16Array	Массив знаковых 16-битных целых чисел	new Int16Array([1, 2, 3, 4])
Uint16Array	Массив беззнаковых 16-битных целых чисел	new Uint16Array([1, 2, 3, 4])
Int32Array	Массив знаковых 32-битных целых чисел	new Int32Array([1, 2, 3, 4])
Uint32Array	Массив беззнаковых 32-битных целых чисел	new Uint32Array([1, 2, 3, 4])
Float32Array	Массив 32-битных чисел с плавающей запятой	new Float32Array([1.5, 2.7, 3.2, 4.9])
Float64Array	Массив 64-битных чисел с плавающей запятой	new Float64Array([1.5, 2.7, 3.2, 4.9])

let arr = new Uint32Array(1*1e6) => 4 bites * 1_000_000
*/