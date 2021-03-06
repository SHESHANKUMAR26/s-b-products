var mongoose = require('mongoose');
var adSchema = mongoose.Schema(
{

    userId: 
    { 
        type:mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    title: 
    {
        type: String,

    },
    category: 
    {
        type: String,

    },
    price: 
    {
        type: Number,

    },
    condition: 
    {
        type: String,

    },
    description: 
    {
        type: String,

    },
    address:
    {
        type:String,
    },
    name: 
    {
        type: String,

    },
    phone: 
    {
        type: String,

    },
    city: 
    {
        type: String,
    },
    date:
    {
        type: String
    }
});

var Ad =  mongoose.model('Ads',adSchema);
module.exports = Ad;