const router = require('express').Router();
const ctrlUser = require('../controllers/ctrlUser');

router.get('/addUser', ctrlUser.addUserShow);
router.post('/editUser', ctrlUser.editUserShow);
router.post('/saveUser', ctrlUser.addUserSave);
router.post('/updateUser', ctrlUser.editUserSave);

module.exports = router;
