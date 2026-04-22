const users = require('../json/users.json');
const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../json/users.json');

const getSortedUsers = (field, direct='asc') => {
    // const users = JSON.parse( fs.readFileSync(usersPath, 'utf8') );

    const d = direct == 'asc'? +1: -1;
    return users.toSorted((a, b) => { 
        if (a[field] < b[field]) return -d;
        if (a[field] > b[field]) return d;
        return 0;
    })
}

const getUsers = () => [...users];

const saveUsersToJSON = () => {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), 'utf8');
}

module.exports = {
    getSortedUsers,
    getUsers,
    saveUsersToJSON
};