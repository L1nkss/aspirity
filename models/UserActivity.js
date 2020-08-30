const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    date: String,
    activity: String,
    distance: Number,
    comment: String
});

module.exports = model('UserActivity', schema);
