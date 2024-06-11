const express = require("express");
const router = express.Router();
const { userRegisterRoute } = require("../controllers/userRegisterRoute.js");
const { userLoginRoute } = require("../controllers/userLoginRoute.js");
const { userLogoutRoute } = require("../controllers/userLogoutRoute.js");

router.get("/", (req, res) => {
    res.render("index", { error: "error" });
});

router.post("/register", userRegisterRoute);

router.post("/login", userLoginRoute);

router.get("/logout", userLogoutRoute);

module.exports = router;
