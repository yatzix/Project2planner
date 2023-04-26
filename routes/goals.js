const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goals');


router.get('/new', goalsController.new);
router.post('/', goalsController.create);
router.get('/', goalsController.index);
router.get('/:id', goalsController.show);
router.delete('/:id', goalsController.delete);

module.exports = router;