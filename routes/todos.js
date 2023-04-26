const express = require('express');
const router = express.Router();

const todosController = require('../controllers/todos');

router.get('/goals/:id/todos/new', todosController.new);

router.post('/goals/:id/todos', todosController.create);

router.delete('/goals/:id/todos/:todoId', todosController.delete);

module.exports = router;