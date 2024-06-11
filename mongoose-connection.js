const mongoose = require("mongoose");
const config = require("config");
const debuger = require("debug")("development:mongoose");

mongoose
   .connect(`${config.get("MONGODB_URI")}`)
   .then(() => {
      debuger("Database connection successful");
   })
   .catch((error) => {
      debuger("Database connection failed ", error);
   });

module.exports = mongoose.connection;
