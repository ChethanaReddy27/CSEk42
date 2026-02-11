import exp from 'express'
import { ProductModel } from '../models/product_model.js'

//creating mini express server
export const productApp = new exp.Router()

//get all products
productApp.get('/products', async (req, res) =>{
    //fetch all products using find in mongoose
    let products = await ProductModel.find()
    //send res
    res.status(201).json({message: "All products", payload: products})
})

//handling route to create product
productApp.post('/products', async (req, res) => {
    let newProduct = req.body
    let newProductDoc = new ProductModel(newProduct)
        //save in db
        await newProductDoc.save()
        //send res
        res.status(200).json({message: "Product added"})
})

//handling route to get product by ObjId
productApp.get('/products/:id', async (req, res) => {
    //fetch ObId from url params
    let objId = req.params.id
    //find product using ObjId
    let proObj = await ProductModel.findById(objId)
    //send res
    res.status(200).json({message: "Product found", payload: proObj})
})

//handling route to update product by ObjId
productApp.put('/products/:id', async (req,res) =>{
    //fetch id from url params
    let objId = req.params.id
    let modifiedObj = req.body 
    //find product by ObjId and return it
    let latestObj = await ProductModel.findByIdAndUpdate(objId,{ $set: {...modifiedObj} },{ new: true })
    //send res
    res.status(200).json({message:"Updated Product",payload:latestObj})
})