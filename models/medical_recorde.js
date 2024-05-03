const mongoose = require("mongoose");
const Schema = mongoose.Schema

const medicalReocordSchema = new Schema({
    full_name : {
        type : String,
        require : true
    },
    disease : {
        type : String,
        require : true
    },
    notes : {
        type : String,
        require : true
    },
    medication : {
        type : String,
        require : true
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Records", medicalReocordSchema);
