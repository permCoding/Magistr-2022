const fs = require('fs');
const router = require('express').Router();

// тут путь уже относительный - "/postUser"
router.post('/', (req, res) => { // это "/" - уже после "/postUser"
    let { firstName, lastName, rating } = req.body;
    fs.appendFileSync(global.filename, `${firstName},${lastName},${rating}\n`, 'utf8');    
    res.redirect('/getUsers');
});

router.get('/', (req, res) => { // это "/" - уже после "/postUser"
    res.render('postUser.ejs', { }); // <%= field %>
});

module.exports = router;