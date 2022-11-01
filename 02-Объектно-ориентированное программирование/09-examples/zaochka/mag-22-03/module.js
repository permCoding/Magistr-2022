const select_json = function (name_file, fields) {
    let clients = require(name_file).clients;
    return JSON.parse(JSON.stringify(clients, fields));
}

const ex_00 = function () {
    let comp = (a,b) => Number(a) - Number(b);
    let line = "12 3 0 9 2 10";
    let nums = line.split(' '); // arr strings
    let nums_s = nums.sort((a,b) => comp(a,b));
    console.log(nums);
    console.log(nums_s);
    // Ё ё - Intl.collarator('ru')
}

module.exports = {
    sel_json: select_json,
    
}

// require("fs").writeFileSync("./json/_clients.json", line);
