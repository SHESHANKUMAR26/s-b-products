// const jwt = require("jsonwebtoken");
// const user = require('../mo

module.exports = function verifyToken(req, res, next) 
{  
    const token = req.header("auth_token");
    const SecretKey = "sheshan";
    if (!token) {
        return res.status(403).send('Access-Denied ');
    }
    try {
        req.token = token;
        req.key = SecretKey;
        next();
      }
      catch (err) {
        console.log(err);
        res.status(400).send("Invalid Token");
    }


}