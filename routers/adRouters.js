const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Ad = require('../model/ad')

router.post('/add',async(req,res)=>{
    let adData = req.body;
    let ReqAd = await Ad({
        userId:adData.userId,
        title:adData.title,
        category:adData.category,
        price:adData.price,
        condition:adData.condition,
        description:adData.description,
        name:adData.name,
        phone:adData.phone,
        city:adData.city,
        date:adData.date
    });
    let savedAd = await ReqAd.save();
    res.send(savedAd);
})


module.exports  = router;