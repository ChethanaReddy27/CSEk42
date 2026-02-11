import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'

//create http server
const app = exp()

//connect to Mongo DB server
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/ecomdb')
        console.log("DB connection successful!")
        let port = 5000
        app.listen(port, () => console.log("Server is listening using port 5000"))
    }
    catch(err){
        console.log("Error occured:", err)
    }
}

connectDB()

//body parsing middleware
app.use(exp.json())

//
app.use('/user-api', userApp)
app.use('/product-api', productApp)

//Default error handling middleware
app.use((err, req, res, next) => {
    res.json({message: "Error", description: err.message})
})