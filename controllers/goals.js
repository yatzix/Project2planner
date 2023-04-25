const Goal = require('../models/goal')

function newGoal(req, res){
    res.render('goals/new', {
        title: 'Create New Goal'
    });
}
async function create(req, res){
    try {
        await Goal.create(req.body);
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
module.exports = {
    new: newGoal,
    create,
    index
}