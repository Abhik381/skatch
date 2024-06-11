const express = require("express");
const app = express();
const path = require("path");
const debuger = require("debug")("development:express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter")
const ownerRouter = require("./routes/ownerRouter");
const databaseConnection = require("./config/mongoose-connection");
require("dotenv").config();

app.use(cors({
  origin: "*",
  credentials: true,
  methods: ["GET","POST"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use("/owner", ownerRouter);

app.listen(3000, () => {
    debuger("Server is running on port 3000");
});
