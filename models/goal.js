const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    progress:{
        type: String,
    },
    when: {
        type: Date,
        default: function(){
            return new Date("2021-11-21")
        },
        get: function(val) {
            if (!val) {
                return null;
            }
            return val.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        }
}
});

const goalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: function(){
            return new Date("2021-11-21")
        },
        get: function(val) {
            if (!val) {
                return null;
            }
            return val.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        }
    },
    deadline: {
        type: Date,
        default: function(){
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        },
        get: function(val) {
            if (!val) {
                return null;
            }
            return val.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        }
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Done'],
        default: 'Pending'
    },
    progress: [journalSchema]
})

module.exports = mongoose.model('Goal', goalSchema)