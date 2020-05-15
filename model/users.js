var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
{
    name:String,
    email: 
    {
        type: String,
        unique:true,        
    },
    password:String,
    
});

var User =  mongoose.model('Users', userSchema);
module.exports = User;
