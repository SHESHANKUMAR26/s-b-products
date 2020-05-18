const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Ad = require('../model/ad');
const verifyToken = require('./verifyTokenUsers');
const  {saveImage} = require('../utils/imageProcessing');

router.post('/add',async(req,res)=>
{
    let adData = req.body;
    console.log(adData);
    let ReqAd = await Ad({
        userId:adData.userId,
        title:adData.title,
        category:adData.category,
        price:adData.price,
        condition:adData.condition,
        description:adData.description,
        address:adData.address,
        name:adData.name,
        phone:adData.phone,
        city:adData.city,
        date:adData.date
    });
    let savedAd = await ReqAd.save();
    try {
        if (req.files && req.files.AdImage) {
            let AdImage = req.files.AdImage;
            let fileName = "" + savedAd._id;
            saveImage("advertisement.image", AdImage, fileName);
        }
        else{
            console.log("err in data");
        }
    }
    catch (err) {
        console.log(err);
    }

    res.send(savedAd);

})


module.exports  = router;