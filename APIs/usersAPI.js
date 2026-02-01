import exp from 'express'
import { UserModel } from '../models/user_model.js'
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