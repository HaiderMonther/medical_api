const Admins = require("../models/admins");
const bcrypt = require("bcryptjs");
const { createJwtToken, maxAge } = require("../functions/createJWT");

const loginAdmin_post = async (req, res) => {
  console.log("hi");
  const username = req.body.username;
  const password = req.body.password;
  try {
    const admin = await Admins.findOne({ username });
    if (admin) {
      bcrypt.compare(password, admin.password).then((auth) => {
        if (auth == true) {
          const token = createJwtToken(admin.id);
          console.log(token);
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000,
          });
          res.status(200).json({ admin: admin._id });
        } else throw Error("incrorrect password !");
      })
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  loginAdmin_post: loginAdmin_post
};
