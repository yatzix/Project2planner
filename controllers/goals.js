function newGoal(req, res){
    res.render('goals/new', {
        title: 'Create New Goal'
    });

}

module.exports = {
    new: newGoal
}