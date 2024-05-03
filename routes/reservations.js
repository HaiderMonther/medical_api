const router = require("express").Router();
const {createReservations_post, getReservations_get, getLatest_get} = require("../controllers/reservations");
const Reservations = require("../models/reservations");
const {requireJwtToken} = require(".././middlewares/jwt")

router.post("/create", createReservations_post);

router.get("/getLatest", getLatest_get);


router.get("/get",requireJwtToken, getReservations_get);


router.get("/get/:id", requireJwtToken ,async (req, res)=> {
    try {
        const id = req.params.id;
        const reservation = await Reservations.findById(id);
        if (reservation) {
            res.status(200).json(reservation); 
        } else {
            res.status(404).json({message : "reservation data not found"});
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
    
})


module.exports = router;