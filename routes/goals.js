const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goals');
const goals = require('../controllers/goals');

router.get('/new', goalsController.new);
router.post('/', goalsController.create);
router.get('/', goalsController.index);

module.exports = router;