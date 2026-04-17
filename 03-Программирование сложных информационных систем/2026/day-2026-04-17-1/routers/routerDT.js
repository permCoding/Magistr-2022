const express = require('express');
const router = express.Router();
const ctrlDT = require('../controllers/controllerDT');

router.get('/dt', ctrlDT.getDateTime);
router.get('/', ctrlDT.getHomePage);

// router.use(ctrlDT.notFound); // если не обработали выше

module.exports = router;

// Маршрутизация