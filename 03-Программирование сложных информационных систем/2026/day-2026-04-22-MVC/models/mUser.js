const users = require('../json/users.json');
// const fs = require('fs');
// const path = require('path');

// const check = (a, b) => +a.rating - +b.rating;

// const getSortedUsers = (field, direct='asc') => {
//     // const usersPath = path.join(__dirname, '../json/users.json');
//     // const usersData = fs.readFileSync(usersPath, 'utf8');
//     // const users = JSON.parse(usersData);

//     const d = direct == 'asc'? +1: -1;
//     return users.toSorted((a, b) => { 
//             if (a[field] < b[field]) return -d;
//             if (a[field] > b[field]) return d;
//             return 0;
//         })
// }

// const getUsers = () => {
//     return [...users];
// }

const getModelUser = (req) => {
    return { 
        id: req.body?.userId ?? -1,
        firstName: req.body?.firstName ?? '',
        lastName: req.body?.lastName ?? '',
        rating: req.body?.rating ?? 0
    };
}

const getMaxId = () => {
    return Math.max(...users.map(user => user.id));
}

const getModelUserById = (userId) => {
    return users.find(user => user.id == userId);
}

const saveUser = (req) => {
    const newUser = getModelUser(req);
    newUser.id = getMaxId() + 1;
    users.push(newUser);
}

const updateUser = (userUp) => {
    const index = users.findIndex(user => user.id == userUp.id);
    users[index] = userUp;
}

module.exports = {
    getModelUserById,
    getModelUser,
    saveUser,
    getMaxId,
    updateUser
};

/*
?. - опциональная цепочка, безопасный доступ к свойству, если req.body undefined
?? - nullish coalescing, значение по умолчанию, только если левая часть null или undefined
*/