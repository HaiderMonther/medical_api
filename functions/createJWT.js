require("dotenv").config();
const secret = process.env.JWT_SECRET
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createJwtToken = (id) => {
    return jwt.sign({id}, secret, {
        expiresIn : maxAge
    })
}

module.exports = {
    createJwtToken : createJwtToken,
    maxAge : maxAge
}