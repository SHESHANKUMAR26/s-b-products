const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../model/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyTokenUsers');

//localhost:3001/user/register
router.get('/getUser',verifyToken,async(req,res) =>
{
    const userData = jwt.verify(req.token,req.key);
    console.log(userData);
    let reqUser =  await User.findOne({email:userData.email});
    res.send(reqUser);
})


router.post('/register',async(req,res) =>
{
    let userData = req.body;
    console.log(userData);
    let emailVerify = await User.findOne({email:userData.email});
    console.log(emailVerify);
    if(emailVerify)
    {
        return res.status(400).send("email is exist");
    }

    let hash = await bcrypt.hash(userData.password,8);
    let Requser = await User(
        {
         name:userData.name,
         email:userData.email,
         password:hash
        }
    );
    let savedUser = await Requser.save();
    res.send(savedUser);
});
router.post('/login',async(req,res)=>
{
    let userData = req.body;
    let emailVerify = await User.findOne({email:userData.email});
    console.log(emailVerify);
    if(!emailVerify)
    {
        return res.status(400).send("email is exist");
    }
    let pswd = await bcrypt.compare(userData.password,emailVerify.password);
    if(!pswd)(res.status(400).json("Your password is incorrect"));

    const email = {
        email:emailVerify.email
    }
    const secretKey = "sheshan";
    const token = jwt.sign(email,secretKey);
    res.status(200).header({"auth_token":`${token}`}).send({"auth_token":`${token}`});
})



module.exports  = router;