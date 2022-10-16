// статические свойства и методы

class Ork {
    static amount = 0;
    constructor(name) {
        this.name = name;
        Ork.amount_inc();
    }
    static amount_inc() {
        this.amount++; // this обращается к классу
    }
    static amount_dec() {
        this.amount--;
    }
    static del_ork(arr, index) {
        delete arr[index];
        Ork.amount_dec();
    }
    show_info() {
        console.log(this.name); // обращается к объекту
        console.log(`их всего - ${Ork.amount}`);
    }
}

console.clear();

let names = ["Масяня","Гена","Логан"];
let orks = [];
for (let name of names) {
    orks.push(new Ork(name));
    orks[orks.length-1].show_info();
}

console.log("- ".repeat(9));

Ork.del_ork(orks, 0);
for (let item of orks.filter(x => x != undefined)) {
    item.show_info();
}
