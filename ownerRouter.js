const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-Model");

router.get("/login", (req, res) => {
    res.render("owner-login");
});

if (process.env.NODE_URI === "development") {
    router.post("/create", async function (req, res) {
        const owners = await ownerModel.find();

        if (owners.length > 0) {
            return res
                .status(400)
                .send("You don't have any permission to create a new owner");
        }

        const { fullname, email, password, contact } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = bcrypt.hash(password, salt);
        const payload = {
            fullname,
            email,
            password: hashPassword,
            contact,
        };

        const createOwner = await ownerModel.create(payload);

        res.status(201).json({
            message: "Owner created successfully",
            data: createOwner,
            success: true,
        });
    });
}

module.exports = router;
