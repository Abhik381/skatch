const productModel = require("../models/Products-Model");

module.exports = async function productCreate(req,res) {
  try {
     let { name,image,price,discount,bgcolor,panlecolor,textcolor } = req.body;
  const payload = {
    name,image,price,discount,bgcolor,panlecolor,textcolor 
  }
  const createProduct = await productModel.create(payload);

    res.status(201).json({
      message: "Product created successfully",
      data: createProduct,
      success: true,
    })
  
  } catch (err) {
     res.status(201).json({
      message: "Something went wrong ",
      error: err.message || err,
    })
  } 
}
