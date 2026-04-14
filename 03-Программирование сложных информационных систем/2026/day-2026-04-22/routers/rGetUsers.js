const { getUsers } = require('../models/model');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('users-04', getUsers());
});

module.exports = router;
