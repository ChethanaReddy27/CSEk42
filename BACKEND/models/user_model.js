import {Schema, model} from 'mongoose'
//Create user schema(username, password,age)
const userSchema =new Schema({
    username:{
        //Validation rules for each field
        type: String,
        required: [true, "Username is required"],
        minLength: [4, "Min length should be 4"],
        maxLength: [6, "Max length exceeded"]
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    age:{
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age should be above 18"],
        max: [25, "Age should be less than 25"]
    }
},
{
    strict: "throw",
    timestamps: true
})

//create User model with that schema

export const UserModel = model("user", userSchema)
//here "user" will be used as collection name but it'll convert into plural by itself