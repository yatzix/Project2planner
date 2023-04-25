const Goal = require('../models/goal');
const Todo = require('../models/todo');

async function newTodo(req, res) {
    const goal = await Goal.findbyId(req.params.id);
    res.render('todos/new', {
       todo: "Enter To Do Info",
       goal: goal,
       title: "See Goal Details"
    })
}

async function create(req, res) {
    const goal = await Goal.findbyId(req.params.id);
    req.body.flight = req.params.id;
    await Todo.create(req.body);
    res.redirect(`/flights/${goal.id}`)
}


module.exports = {
    create,
    new: newTodo

};