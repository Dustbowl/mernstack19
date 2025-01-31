let mongoose = require('mongoose');
Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/assessment");

let hobbySchema = new Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true}
}, {
    versionKey: false
})

let HobbyModel = mongoose.model("hobby", hobbySchema);
module.exports = HobbyModel;