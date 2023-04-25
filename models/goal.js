const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    progress: String,
    When: Date,
})

const goalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: function(){
            return new Date().getFullYear();
        }
    },
    deadline: {
        type: Date,
        default: function(){
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        },
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Done'],
        default: 'Pending'
    },
    progress: [journalSchema]
})

module.exports = mongoose.model('Goal', goalSchema)
