const path = require('path');

const express = require('express');

const pandaController = require('../controllers/pandaControllers');
const router = express.Router();

router.post('/add', pandaController.addPanda);
router.get('/profile', pandaController.getProfile);


module.exports = router;
