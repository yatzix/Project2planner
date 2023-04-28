const Goal = require('../models/goal');
const Todo = require('../models/todo');

async function newTodo(req, res) {
    // Find the goal with the specified ID
    const goal = await Goal.findById(req.params.id);
    // Render the "todos/new" template, passing in the goal and some data for the template
    res.render('todos/new', {
       todo: "Enter To Do Info",
       goal: goal,
       title: "See Goal Details"
    })
}

async function create(req, res) {
    try {
    // Find the goal with the specified ID
    const goal = await Goal.findById(req.params.id);
    // Add the goal ID to the request body
    req.body.goal = req.params.id;
    // Create a new to-do item in the database
    await Todo.create(req.body)
    // Redirect the user back to the goal's detail page
    res.redirect(`/goals/${goal.id}`);
    } catch(error){
        console.log(error);
        res.send('error')
    }
}
async function deleteTodo(req, res) {
    try{
         // Find the goal with the specified ID
        const goal = await Goal.findById(req.params.id);
        // Add the goal ID to the request body
        req.body.goal = req.params.id;
        // Get the ID of the to-do item to be deleted from the URL parameters
        const todoId = req.params.todoId;
        // Delete the to-do item from the database using the `findByIdAndRemove` method on the `Todo` model
        await Todo.findByIdAndRemove(req.params.todoId);
        // Redirect the user back to the goal's detail page
        res.redirect(`/goals/${goal.id}`)
        } catch(error){
            console.log(error)
            res.render('error', {title: 'Something went wrong'})
    }
}


module.exports = {
    create,
    new: newTodo,
    delete: deleteTodo

};