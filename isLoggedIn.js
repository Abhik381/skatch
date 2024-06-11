const jwt = require("jsonwebtoken");
const userModel = require("../models/Users-Model");

module.exports = async function (req,res,next) {
  if(!req.cookies.token)
       return res.status(401).json(
         { 
           message: "You need to login first.",
          error: true
         } );
   try {
       const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
       const user = await userModel.findOne({email: decoded.email}).select ("-password");
       req.user = user;
     next()
   } catch (error) {
      res.status(500).json({
        message: "Server Error",
        error: error.message || error
      })
   }
}
