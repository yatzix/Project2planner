const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goals')

router.get('/new', goalsController.new);

module.exports = router;