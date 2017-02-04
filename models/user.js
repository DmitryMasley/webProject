let mongoose = require("mongoose");
let passportLocalMongose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String
});
userSchema.plugin(passportLocalMongose);


module.exports = mongoose.model("User", userSchema);