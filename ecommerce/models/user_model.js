import {Schema, model} from 'mongoose'

//create cart Schema
const cartSchema = new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: 'product' //name of product model
    },
    quantity:{
        type: Number,
        default: 1
    }

})
const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "User name required"]
    },
    email:{
        type: String,
        required: [true, "Email required"],
        unique: [true, "Email already exists"] //add to index
    },
    password:{
        type: String,
        required: [true, "Password required"]
    },
    cart:{
        type: [cartSchema]
    }
})

export const UserModel = model('user', userSchema)