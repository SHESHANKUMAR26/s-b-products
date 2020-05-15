var mongoose = require('mongoose');
var adSchema = mongoose.Schema(
{

    userId: 
    { 
        type: String 
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