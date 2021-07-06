var mongoose = require('mongoose');
 
module.exports = mongoose.model('Users',{
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});
