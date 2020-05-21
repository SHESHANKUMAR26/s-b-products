 var cors = require('cors');
const express = require ('express');
const app = express();
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");
 const userRouter = require('./routers/userRouter');
 const adRouter = require('./routers/adRouters');
 const fileUpload = require("express-fileupload");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

app.use("/advertisement",adRouter);
app.use("/user",userRouter);



mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0-nh1nq.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("database connected");
    app.listen(3001,()=>{
        console.log("App is running on port 3001");
    })
    
})
.catch((err)=>{
    console.log(err);
})
