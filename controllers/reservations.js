const Reservations = require("../models/reservations");


const createReservations_post = async (req, res) => {
    try {
        const reservations = await Reservations.create(req.body);
        res.status(200).json(reservations);
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
}

const getReservations_get = async (req, res) => {
    try {
        const reservations = await Reservations.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
}

const getLatest_get = async (req, res) => {
    try {
        const reservations = await Reservations.find().sort({createdAt : -1}).limit(7);
        res.status(200).json(reservations);
    } catch (error) {
        res.status(503).json({message : "Service temporarily unavailable"}); 
    }
}

module.exports = {
    createReservations_post : createReservations_post,
    getReservations_get : getReservations_get,
    getLatest_get : getLatest_get
}