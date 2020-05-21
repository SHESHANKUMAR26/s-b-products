const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Ad = require('../model/ad');
const verifyToken = require('./verifyTokenUsers');
const  {saveImage ,loadImage} = require('../utils/imageProcessing');


router.get('/',async(req,res)=>{
    let ads = await Ad.find({}).populate("userId");
    res.status(200).send(ads);
})

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

router.get("/:id/image", async (req, res) => {
    const addID = req.params.id;
    loadImage("advertisement.image", addID, res);
});


router.delete('/delete/:id', function (req, res) {
    Ad.remove({ _id: req.params.id })
        .exec()
        .then(result => {
           
            res.status(200).json({msg: "Your Ad is Deleted!"});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err})
        });

});

module.exports  = router;