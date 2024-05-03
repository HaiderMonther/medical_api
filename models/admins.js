const mongoose = require("mongoose");
const Schema = mongoose.Schema

const adminsSchema = new Schema({
    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    full_name : {
        type : String,
        require : true
    },
    img_path : {
        type : String,
        require : true
    },
    permissions : {
        type : String,
        require : true
    },
}, {
    timestamps : true
})


module.exports = mongoose.model("Admins", adminsSchema);
