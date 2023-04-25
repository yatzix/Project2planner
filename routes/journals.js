const express = require('express');
const router = express.Router();
const journalsController = require('../controllers/journals');

router.post('/goals/:id/journals', journalsController.create)

module.exports = router;
