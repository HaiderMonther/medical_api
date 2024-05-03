const Admins = require("../models/admins");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const getAdmins_get = async (req, res)=> {
    try {
        const admins = await Admins.find();
        res.status(200).json(admins);  
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"});  
    }
}


const createAdmins_post = async (req, res)=> {
    const admin = req.body
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    admin.password = hashPassword;

    try {
        await Admins.create(admin);
        res.status(200).json(admin);  
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"}); 
        fs.unlinkSync(admin.img_path)
    }
}

const logOutAdmins_get = async (req , res) => {
    res.cookie("jwt", '', { maxAge: 1 });
    res.status(200).json({})
}

module.exports = {
    getAdmins_get : getAdmins_get,
    createAdmins_post : createAdmins_post,
    logOutAdmins_get : logOutAdmins_get
}