const userModel = require("../models/Users-Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userLoginRoute = async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.status(400).send("User not found");
  bcrypt.compare(password, user.password, function (err, result) {
    if (result){
      const token = jwt.sign({ id: user._id, email }, process.env.JWT_KEY);
    res.cookie("token", token);
      return res.status(200).json({
        message: "User logged in successfully",
        token,
        data: user,
        success: true,
      })
    }
    res.status(400).json({
      message: "Something went wrong",
      error: true,
    });
  });
};
