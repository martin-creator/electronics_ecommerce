import asyncHandler from "../middleware/asyncHandler";
import Product from "../Models/productModel";

const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.json(products);
});

const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }else{
        res.status(404).json({message: 'Product not found'});
        throw new Error('Resouce not found');
    }

});


export {getProducts, getProductById};