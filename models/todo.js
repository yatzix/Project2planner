const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.connect( process.env.DATABASE_URL );

const todoSchema = new Schema({
   todo:{type: String, required: true},
   when:{type: Date, default: () => new Date(new Date().getFullYear() + 1),
    get: function(val) {
        //checks if val is falsy
        if (!val) {
            return null; //if falsy return null
        }//otherwise convert date value to format specified
        return val.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    }},
status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Done'],
    default: 'Pending'
},
   goal: {type: Schema.Types.ObjectId, ref: 'Goal'},
});

module.exports = mongoose.model('Todo', todoSchema)
