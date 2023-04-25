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

module.exports = {
    new: newGoal,
    create
}