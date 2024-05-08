const router = require("express").Router();
const {loginAdmin_post} = require("../controllers/auth"); 


router.post("/", loginAdmin_post)


module.exports = router;
