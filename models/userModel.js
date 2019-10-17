var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    email: String,
    username: String,
    password: String
});

var user = mongoose.model('userCollection', userSchema);

module.exports = user;
