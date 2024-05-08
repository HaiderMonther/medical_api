require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')
const {requireJwtToken, check_if_login} = require("./middlewares/jwt")

const app = express();

app.use(express.json());
app.use(cookieParser())
// Increase request size limit for JSON requests
app.use(bodyParser.json({ limit: '5mb' }))

// Increase request size limit for URL-encoded requests
app.use(express.urlencoded({ limit: '5mb', extended: true }));


const adminsRoutes = require("./routes/admins");
app.use("/api/admins" , requireJwtToken, adminsRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth",check_if_login, authRoutes);

const reservationsRoutes = require("./routes/reservations");
app.use("/api/reservations" , reservationsRoutes);


const recordsRoutes = require("./routes/medical_records");
app.use("/api/records" , recordsRoutes);

const messagesRoutes = require("./routes/messages");
app.use("/api/messages" , messagesRoutes);


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("database connected");
    app.listen(process.env.PORT, ()=>{
        console.log(`api is running, main route is: \n http://localhost:${process.env.PORT}/api/`);
    })
})