import exp from 'express'
import { ProductModel } from '../models/product_model.js'
//create mini server 
export const productApp = exp.Router()

//get all products
productApp.get('/products', async (req, res) => {
    let products = await ProductModel.find()
    //send res
    res.status(200).json({message: "All Prouducts", payload: products})
})

//create a product
productApp.post('/products', async (req, res) => {
    let newProduct = req.body
    //create a document with the new product data
    let newProductDoc = new ProductModel(newProduct)
    //save in DB
    await newProductDoc.save()
    //send res
    res.status(200).json({message: "Product created"})
})