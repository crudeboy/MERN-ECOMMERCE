import express from "express";
import asyncHandler from "express-async-handler"
import Product from "../models/productModels.js"

const router = express.Router()

// app.get('/', (req, res) => {
//     res.send("The home page")
// })x

//@desc Fetch all products
//@route GET /api/products
//@access public
router.get('/', asyncHandler(async (req, res) => {
    const products =await  Product.find({})
    // throw new Error("This one na big error")
    res.json(products)
}))

//@desc Fetch single products
//@route GET /api/products/:id
//@access public

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    
    if(product){
        // console.log(product)
        res.json(product)
    }else{
        res.status(404)
        throw new Error("Product not found")
    }
   
}))



export default router;