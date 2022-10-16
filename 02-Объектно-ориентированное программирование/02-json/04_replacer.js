function ex_00() {
    let foo = {
        foundation: 'Mozilla', 
        model: 'box', 
        week: 45, 
        transport: 'car', 
        month: 7
    };
    console.log(JSON.stringify(foo, null, 4));
}

function ex_01() {
    const replacer = ['week', 'month'];
    //   
    let foo = {
        foundation: 'Mozilla', 
        model: 'box', 
        week: 45, 
        transport: 'car', 
        month: 7
    };
    
    console.log(JSON.stringify(foo, replacer)); // '{"week":45,"month":7}'    
}

function ex_02() {
    function replacer(key, value) {
        if (typeof value === 'string') {
            return undefined;
        }
        return value;
      }
      
    let foo = {
        foundation: 'Mozilla', 
        model: 'box', 
        week: 45, 
        transport: 'car', 
        month: 7
    };
    
    console.log(JSON.stringify(foo, replacer)); // '{"week":45,"month":7}'
}

function ex_03() {
    const replacer = null;
      
    let foo = {
        foundation: "Mozilla", 
        model: "box", 
        week: 45, 
        transport: "car", 
        month: 7
    };
    foo.transport = {
        type: foo.transport,
        color: "red",
        style: "new age"
    };
    console.log(JSON.stringify(foo, replacer, 4));
}

console.clear();
ex_00();
ex_01();
ex_02();
ex_03();
