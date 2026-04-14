const { getSortedUsers, getUsers } = require('../models/model');

const router = require('express').Router();

router.use((req, res, next) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    next();
}); // тут актуально - несколько методов в роутере

router.get('/order/', (req, res) => {
    console.log(req.query);
    const { field, direct } = req.query;
    const limit = 190;
    const { arrayUsers } = getSortedUsers(field, direct);
    res.render('users-08', { field, direct, arrayUsers, limit });
});

router.get('/', (req, res) => {
    const field = '', direct  = '', limit = 190;
    const { arrayUsers } = getUsers();
    res.render('users-08', { field, direct, arrayUsers, limit });
});

module.exports = router;
