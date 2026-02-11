import exp from 'express'
import { UserModel } from '../models/user_model.js' 
import { ProductModel } from '../models/product_model.js'
import { Types } from 'mongoose'
//import jwt from 'jsonwebtoken'
import { hash, compare } from 'bcryptjs'
//Create mini server
export const userApp = exp.Router()

//get all users
userApp.get('/users', async (req, res) => {
    let users = await UserModel.find()
    //send res
    res.status(200).json({message: "All Users", payload: users})
})

//create user
userApp.post('/users', async (req, res) => {
    let newUser = req.body
    //run validators
    await new UserModel(newUser).validate()

    //hash password
    let hashedPassword = await hash(newUser.password, 10)
    newUser.password = hashedPassword
    //create new user doc
    let newUserDoc = new UserModel(newUser)
    //save in db
    await newUserDoc.save({validateBeforeSave: false})
    //send res
    res.status(201).json({message: "User created"})
})

//adding a product into user cart
userApp.put('/user-cart/user-id/:uid/product-id/:pid', async (req, res) =>{
    //read uid, pid from params
    let {uid, pid} = req.params //{uid: "", pid: ""}
    //check for user in db
    let user = await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message: "User not found"})
    }
    //check for product in db
    let product = await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message: "Product not found"})
    }
    //check for product in user's cart
    let searchProduct = user.cart.find(item => item.product.toString() === pid)
    //
    let modifiedUser
    if(searchProduct === undefined){
        //push new product if not found in cart
        modifiedUser = await UserModel.findByIdAndUpdate(
            uid,
            {$push: {cart: {product: new Types.ObjectId(pid), quantity: 1}}},
            {new: true}
        ).populate("cart.product", "productName price quantity")
    }
    else {
        //Found product, So increment
    modifiedUser = await UserModel.findOneAndUpdate(
        { _id: uid, "cart.product": pid },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true }
    ).populate("cart.product", "productName price quantity")
}
    //send res
    res.status(200).json({message: "Product added successfully!", payload: modifiedUser})
})


//get user by id
userApp.get('/users/:uid', async (req, res) => {
    //read uid from params
    let uid = req.params.uid
    //find user
    let userObj = await UserModel.findById(uid).populate("cart.product", "productName price quantity")
    //send res
    res.status(200).json({message: "User", payload: userObj})
})

//id comparing
userApp.get('/compare/:pid', async (req,res) =>{
    let productId = req.params.pid
    let product = ProductModel.findById(productId)
    if(productId == product._id){
        console.log("Equal")
    }
    else{
        console.log("Not equal")
    }
})