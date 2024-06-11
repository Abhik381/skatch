const userModel = require("../models/Users-Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userRegisterRoute = async (req, res) => {
  try {
    let { fullname, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(400).send("User already exists");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hash(password, salt);
    const payload = {
      fullname,
      password: hashPassword,
      email,
    };
    const createUser = await userModel.create(payload);
    const token = jwt.sign({ id: createUser._id, email }, process.env.JWT_KEY);
    res.cookie("token", token);
    res.status(201).json({
      message: "User created successfully",
      token,
      data: createUser,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Somthing went wrong",
      data: err.message,
    });
  }
};
