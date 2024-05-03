const Messages = require("../models/messages");


const createMessages_post = async (req, res) => {
    try {
        const message = await Messages.create(req.body);
        res.status(200).json(message);
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
}

const getMessages_get = async (req, res) => {
    try {
        const messages = await Messages.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
}


module.exports = {
    createMessages_post : createMessages_post,
    getMessages_get : getMessages_get
}