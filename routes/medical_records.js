const router = require("express").Router();
const {createRecords_post, getRecords_get} = require("../controllers/medical_records");
const Records = require("../models/medical_recorde");
const {requireJwtToken} = require(".././middlewares/jwt")


router.get("/",requireJwtToken, getRecords_get);

router.post("/create", requireJwtToken, createRecords_post);


router.get("/get/:id", requireJwtToken ,async (req, res)=> {
    try {
        const id = req.params.id;
        const record = await Records.findById(id);
        if (record) {
            res.status(200).json(record); 
        } else {
            res.status(404).json({message : "reservation data not found"});
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
    
})

router.post("/update/:id", requireJwtToken ,async (req, res)=> {
    try {
        const id = req.params.id;
        const record = await Records.findByIdAndUpdate(id, req.body)
        if (record) {
            res.status(200).json(record); 
        } else {
            res.status(404).json({message : "reservation data not found"});
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
    
})

module.exports = router;