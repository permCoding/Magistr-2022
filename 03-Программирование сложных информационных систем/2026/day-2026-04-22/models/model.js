const users = require('../json/users.json');
// const fs = require('fs');
// const path = require('path');

// const check = (a, b) => +a.rating - +b.rating;

const getSortedUsers = (field, direct='asc') => {
    // const usersPath = path.join(__dirname, '../json/users.json');
    // const usersData = fs.readFileSync(usersPath, 'utf8');
    // const users = JSON.parse(usersData);
    // console.log(users);

    const d = direct == 'asc'? +1: -1;
    // const arrayUsers = users.toSorted(check);
    // console.log(arrayUsers);
    return { 
        // arrayUsers
        // "arrayUsers": users.slice(2,)
        // "arrayUsers": users.toReversed()
        // "arrayUsers": users.toSorted(check)
        // "arrayUsers": users.toSorted((a, b) => a[field]>b[field]? d: -d)
        "arrayUsers": [...users].sort((a, b) => { 
            if (a[field] < b[field]) return -d;
            if (a[field] > b[field]) return d;
            return 0;
        })
    };
}

const getUsers = () => {
    return { "arrayUsers": [...users] };
}

module.exports = {
    getSortedUsers,
    getUsers
};