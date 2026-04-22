const router = require('express').Router();
const ctrlUsers = require('../controllers/ctrlUsers');
    // /users
router.post('/order', ctrlUsers.orderUsers);
router.get('/', ctrlUsers.mainUsers);
router.get('/saveUsers', ctrlUsers.saveUsers);

module.exports = router;
