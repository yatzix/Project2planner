const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
   name:{type: String, require: true},
   created:{type: Date, defualt: function(){
    return new Date(new Date().setFullYear(new Date().getFullYear() +1))    
}},
   status: {type: String, enum:['In Progress', 'Pending','Done']},
   goal: {type: Schema.Types.ObjectId, ref: 'Goal'},
});

module.exports = mongoose.model('Todos', todoSchema)
