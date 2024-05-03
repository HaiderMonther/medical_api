const Records = require("../models/medical_recorde");


const createRecords_post = async (req, res) => {
    try {
        const records = await Records.create(req.body);
        res.status(200).json(records);
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
}

const getRecords_get = async (req, res) => {
    try {
        const records = await Records.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
}


module.exports = {
    createRecords_post : createRecords_post,
    getRecords_get : getRecords_get
}