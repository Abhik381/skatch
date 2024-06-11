const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: String,
    image: Buffer,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panlecolor: String,
    textcolor: String
})

module.exports = mongoose.model("Product", ProductSchema)