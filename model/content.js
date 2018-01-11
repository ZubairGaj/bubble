var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var content =  new Schema({
    title: {type: String, required: false},
    clickThroughUrl: {type: String, required: false},
    description: {type: String, required: false},
    type: {type: String, required: false},
    notes: {type: String, required: false},
    category: {type: String, required: false},
    priority: {type: String, required: false},
    addedBy: {type: String, required: false}
});

module.exports = mongoose.model("Notes", content);