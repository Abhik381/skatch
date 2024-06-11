const express = require("express");
const router = express.Router();
const productCreateRoute = require("../controllers/productCreateRoute.js");
const upload = require("../config/multer.js");
const isLoggedIn = require("../middlewears/isLoggedIn.js");

router.get("/", (req, res) => {
    res.send("User route");
});

router.post("/create",isLoggedIn,upload.single("image"), productCreateRoute);

module.exports = router;
