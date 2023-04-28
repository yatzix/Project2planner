const Goal = require('../models/goal')
const Todo = require('../models/todo')
const User = require('../models/user')

function newGoal(req, res){
    res.render('goals/new', {
        title: 'Create New Goal'
    });
}
async function create(req, res){
    try {
        const goal = await Goal.create(req.body);
        req.user.goals.push(goal._id);
        await req.user.save();
        res.redirect('/goals');
    } catch(error){
        console.log(error)
        res.render('error', {title: 'Something went wrong'})
    }
}

async function index (req, res){
    try{
        const user = await User.findById(req.user._id).populate('goals');
        res.render('goals/index', { 
            goals: user.goals, 
            title: 'All Goals'
        });
    } catch (error) {
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

async function deleteGoal(req, res) {
    try{
        await Goal.findByIdAndRemove(req.params.id);
        res.redirect('/goals')
        } catch(error){
            console.log(error)
            res.render('error', {title: 'Something went wrong'})
    }
}

module.exports = {
    new: newGoal,
    create,
    index,
    show,
    delete: deleteGoal,
}