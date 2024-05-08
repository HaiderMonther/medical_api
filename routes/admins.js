const router = require("express").Router();
const {getAdmins_get, createAdmins_post, logOutAdmins_get} = require("../controllers/admins"); 
const {uploadImage, fileValidation, dataValidation} = require("../middlewares/admins")
const Admins = require("../models/admins")
const fs = require("fs");

router.get("/", getAdmins_get)

router.post("/create", (req, res, next)=>{
    console.log(req.body);
    next()
},uploadImage.single("image"),fileValidation,dataValidation,createAdmins_post);

router.get("/get/:id", async (req, res)=> {
    try {
        const adminId = req.params.id;
        const admin = await Admins.findById(adminId);
        if (admin) {
            res.status(200).json(admin); 
        } else {
            res.status(404).json({message : "admin data not found"});
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
    
})

router.get("/delete/:id", async (req, res)=> {
    const adminId = req.params.id;
    try {
        const admin = await Admins.findById(adminId);
        console.log(admin);
        fs.unlinkSync(admin.img_path);

        await Admins.findByIdAndDelete(adminId);
        res.status(200).json({});
        
    } catch (error) {
        console.log(error.message);
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
})

router.get("/logout", logOutAdmins_get)
module.exports = router;