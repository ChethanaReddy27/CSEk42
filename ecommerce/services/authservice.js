import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/user_model.js";
//register function
export const register=async (userobj)=>{
    //create doc
    const userdoc=new UserModel(userobj)
    //validate  from empty password and confirm password
    await userdoc.validate();
    //hash and replace plain password
    userdoc.password=await bcrypt.hash(userdoc.password,10);
    const created=await userdoc.save();
    //convert doc to obj to remove password
    const newUserobj=created.toObject();
    //remove password
    delete newUserobj.password;
    //return user obj without password
    return newUserobj;
};
//login function
export const authenticate=async (email,password)=>{
    //find user by email&role
    const user=await UserModel.findOne({email,role});
    if(!user){
        const err=new Error("Invalid email or password");
        err.status=401;
        throw err;
    }
    //compare passwords
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        const err=new Error("Invalid email or password");
        err.status=401;
        throw err;
    }
    //generate token
    const token=jwt.sign({userId:user._id,role:user.role,email:user.email},process.env.JWT_SECRET,{expiresIn:"1h"});

const safe=user.toObject();
delete safe.password;

return {token,user:safe};
};