const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
   name:{type: String, required: true},
   created:{type: Date, defualt: function(){
    return new Date(new Date().setFullYear(new Date().getFullYear() +1))    
}},
status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Done'],
    default: 'Pending'
},
   goal: {type: Schema.Types.ObjectId, ref: 'Goal'},
});

module.exports = mongoose.model('Todo', todoSchema)
