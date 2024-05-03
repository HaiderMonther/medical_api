const mongoose = require("mongoose");
const Schema = mongoose.Schema

const messagesSchema = new Schema({
    full_name : {
        type : String,
        require : true
    },
    age : {
        type : String,
        require : true
    },
    subject : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Messages", messagesSchema);
