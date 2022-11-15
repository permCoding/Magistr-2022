let obj = {
    "id": 59761,
    "age": 35,
    "name": "Кошмар Кошмаров",
    "gender": "male",
    "address": {
        "city": "Кунгур",
        "street": "Ленина",
        "addr": {
            "home": 2,
            "apartment": 21
        }
    },
    "isActive": true,
    "company": "CEDWARD",
    "email": "koshma@cedward.com",
    "phone": "+8 (890) 543-2508"
}

// шапка функции
let obj_new = {};
for (let key in obj) {
    if (typeof(obj[key]) !== 'object') {
        obj_new[key] = obj[key];
    }
    else {
        // сделать рекурс вызов 
    }
}
// return obj_new;

// let obj_new = cloneDeep(obj);

obj_new['age'] = 36;
obj_new['address']['city'] = "Добрянка";

console.log(obj);
console.log(obj_new);
