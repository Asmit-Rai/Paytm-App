const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://<username>:<password>@paytmapp.w1q6x.mongodb.net/");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};