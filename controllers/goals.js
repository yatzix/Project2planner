const Goal = require('../models/goal')
const Todo = require('../models/todo')

function newGoal(req, res){
    res.render('goals/new', {
        title: 'Create New Goal'
    });
}
async function create(req, res){
    try {
        await Goal.create(req.body);
        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
        }
        res.redirect('/goals');
    } catch(error){
        console.log(error)
        res.render('error', {title: 'Something went wrong'})
    }
}

async function index (req, res){
    try{
        const allGoals = await Goal.find({});

        res.render('goals/index', { 
            goals: allGoals, 
            title: 'All Goals'
        });
    } catch (error) {
        // during development mode; console.log the error 
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
}
async function show(req, res) {
    try {
        const goal = await Goal.findById(req.params.id);
        const todos = await Todo.find({ goal: goal._id})
        res.render('goals/show', { 
            goal: goal, 
            title: 'See Goal Details',
            todos
        });
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'});
    }
}

module.exports = {
    new: newGoal,
    create,
    index,
    show
}