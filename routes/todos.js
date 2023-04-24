const express = require('express');
const router = express.Router();

const todosController = require('../controllers/todos');

router.get('/flights/:id/todos/new', todosController.new);

router.post('/flights/:id/todos', todosController.create);

module.exports = router;