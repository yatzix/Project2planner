const Goal = require('../models/goal')

async function create(req, res) {
    const foundGoal = await Goal.findById(req.params.id);
    foundGoal.progress.push(req.body);
    try {
      await foundGoal.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/goals/${foundGoal._id}`);
  }
  
  module.exports = {
    create,
  }