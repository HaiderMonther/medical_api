const mongoose = require("mongoose");
const Schema = mongoose.Schema

const reservationsSchema = new Schema({
    full_name : {
        type : String,
        require : true
    },
    age : {
        type : String,
        require : true
    },
    sex : {
        type : String,
        require : true
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Reservations", reservationsSchema);
