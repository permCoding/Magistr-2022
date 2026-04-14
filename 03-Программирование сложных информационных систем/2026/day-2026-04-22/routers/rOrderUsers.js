const { getSortedUsers } = require('../models/model');

const router = require('express').Router();

router.use((req, res, next) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    next();
}); // это актуально, если несколько методов в роутере

router.get('/:field/:direct', (req, res) => {
    const { field, direct } = req.params;
    res.render('users-04', getSortedUsers(field, direct));
});

module.exports = router;


// для этого пути '/:field/:direct'
// в роутере могут быть разные методы GET, POST, ...

// в роутере путь относительный
// часть пути в app.use('/тут', );