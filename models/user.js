const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  goals: [{
    type: Schema.Types.ObjectId,
    ref: 'Goal'
  }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);