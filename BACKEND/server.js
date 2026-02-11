import exp from 'express'
//import userApp, productApp mini servers
import { userApp } from './APIs/usersAPI.js'
import { productApp} from './APIs/productAPI.js'
import { connect } from 'mongoose'
import cookieParser from 'cookie-parser'
const app = exp()

//body parser middleware
app.use(exp.json())

app.use(cookieParser() )
const port = 4000

//connect to db server
// function connectDB(){
    //     connect('mongodb://localhost:27017/anuragdb2')
    //     .then(() => console.log("Connection Successful!"))
    //     .catch((err) => console.log("Error occured while connecting", err))
    // }
    
//Modern way
async function connectDB(){
    try{
    await connect('mongodb://localhost:27017/anuragdb2')
    console.log("DB connection Successful!")

    //assign port number
    app.listen(port, () => console.log("Server is listening"))
    
    }
    catch(err){
        console.log("Error occured", err)
    }
}

connectDB()
//set specific route URL for each api
    app.use('/user-api', userApp)
    app.use('/product-api', productApp)

// //Error handling middleware
// app.use((err, req, res, next) => {
//     res.status(500).json({message: "Error", description: err.message})
// })