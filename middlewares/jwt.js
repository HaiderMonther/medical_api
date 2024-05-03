require("dotenv").config();
const secret = process.env.JWT_SECRET
const jwt = require("jsonwebtoken");

const requireJwtToken = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(token);
    if (token) {
        jwt.verify(token, secret, (err, decodedData)=> {
            if (err) 
                res.status(401).json({message : "Invalid credentials"});
            else 
                next();
        })
    } else {
        res.status(401).json({message : "Invalid credentials"})
    }
}


const check_if_login  = (req, res, next)=> {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, secret, (err, encodedToken)=>{
            if (err) {
                next();
            } else {
                res.status(403).json({message : "Already authenticated"});
            }
        })
    } else {
        next();
    }
}

module.exports = {
    requireJwtToken : requireJwtToken,
    check_if_login : check_if_login
}