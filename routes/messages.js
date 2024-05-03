const router = require("express").Router();
const {getMessages_get, createMessages_post} = require("../controllers/messages");
const Messages = require("../models/messages");
const {requireJwtToken} = require(".././middlewares/jwt")


router.get("/",requireJwtToken, getMessages_get);

router.post("/create", createMessages_post);


router.get("/get/:id", requireJwtToken ,async (req, res)=> {
    try {
        const id = req.params.id;
        const message = await Messages.findById(id);
        if (message) {
            res.status(200).json(message); 
        } else {
            res.status(404).json({message : "reservation data not found"});
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
    
})

module.exports = router;