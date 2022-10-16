function* range(a, b, step=1) {
    let i = a;
    while (i < b) {
        yield i;
        i += step;
    }
}

console.clear();

let gen = range(2, 20, 3);

// console.log(gen.next());
for (let elm of gen){
    console.log(elm);
}
// console.log(gen.next());
