const express = require('express')

const dotenv = require('dotenv')

const colors = require('colors')

//environment variable
dotenv.config()
const port =process.env.PORT || 5000

 

//init express
const app = express()


 


app.listen(port,()=>{

console.log(`server is running on port ${port}`.bgCyan.yellow);


})



