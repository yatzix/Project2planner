const Goal = require('../models/goal');
const Todo = require('../models/todo');

async function newTodo(req, res) {
    const goal = await Goal.findById(req.params.id);
    res.render('todos/new', {
       todo: "Enter To Do Info",
       goal: goal,
       title: "See Goal Details"
    })
}

async function create(req, res) {
    try {
    const goal = await Goal.findById(req.params.id);
    req.body.goal = req.params.id;
    await Todo.create(req.body)
    res.redirect(`/goals/${goal.id}`);
    } catch(error){
        console.log(error);
        res.send('error')
    }
}



module.exports = {
    create,
    new: newTodo

};