let mongoose = require('mongoose');
schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/assessment");

let userSchema = new schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true},
        phone: Number
    },
    {
        versionKey: false
    }
)

let UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;