import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    pid:{
        type: Number
    },
    productName:{
        type: String
    },
    price:{
        type: Number
    }
},
{
    strict: "throw",
    timestamps: true
})

export const ProductModel = model("product", productSchema)