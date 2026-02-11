import exp from 'express'
import { UserModel } from '../models/user_model.js'
import{hash, compare} from 'bcryptjs';
import jwt, { verify } from 'jsonwebtoken';
import {verifyToken} from '../middleware/verifytoken.js'
export const user = exp.Router();
//create mini server
export const userApp = exp.Router()

//User API routes
//get route handling
userApp.get('/users', async (req, res) =>{
    let users = await UserModel.find()
    //send res
    res.status(200).json({message: "All users", payload: users})
})

//create user
userApp.post('/users', async(req, res) =>{
    let newUser = req.body
    //create new user document
    let newUserDoc = new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //send res
    res.status(201).json({message: "User created"})
})

//get user by objId
userApp.get('/users/:id', async (req, res) => {
    //get ObjectID from url params
    let objId = req.params.id
    //find user in DB
    let userObj = await UserModel.findById(objId)
    //send res
    res.status(200).json({message: "User found", payload: userObj})
})

//update user by objId
userApp.put('/users/:id', async (req,res) => {
    let objId = req.params.id
    let modifiedObj = req.body
    let latestObj = await UserModel.findByIdAndUpdate(objId,
        { $set: {...modifiedObj }},
        { new: true, runValidators: true })
//here new means returns latest obj and validators validate at updation also
})

//delete user by objId
userApp.delete('/users/:id', async(req,res) =>{
    //get obj id from url params
    let objId = req.params.id

    //find and delete obj
    let deletedUser = await UserModel.findByIdAndDelete(objId)

    //send res
    res.status(200).json({message: "User removed", payload: deletedUser})
    
})
userApp.get("test",verify,(req,res)=>{
    res.send("This is a test route")
});

let product = await productModel.findById(productId)
console.log(product);
if(!product){
    return res.status(404).json({message: "Product not found"})
}   
let modifiedUser = await UserModel.findByIdAndUpdate(userId, { $push: { cart:{ productId: product._id} } }, { new: true })  
res.status(200).json({message: "Product added to user", payload: modifiedUser})

userRoute.get("/users/:uid",async(req,res)=>{
    let {uid}=req.params;
    let user=await userModel.findById(uid).populate("cart.product");
    res.status(200).json({message:"user data",payload:user});
});
userRoute.post("/users",async(req,res)=>{
let newUser=req.body;
    await new UserModel(newUser).validate();
    let hashedpassword = await hash(newUser.password,10);
    newUser.password=hashedpassword;
    let newUserDoc=new UserModel(newUser);
    await newUserDoc.save({validateBeforeSave:false});
    res.status(201).json({message:"user created"});
});

