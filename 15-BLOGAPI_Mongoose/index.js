'use strict'
/*
    BLOG API WITH MONGOOSE
    
*/
// npm i dotenv nodemon express express-async-errors
// npm i mongose

const express=require("express")
const app = express()

app.use(express.json()) // yukarıda kalsın
require('./src/dbConnection')
require('dotenv').config()

const PORT = process.env.PORT
const HOST = process.env.HOST

app.all('/',(req,res) =>{
    res.send('WELCOME BLOG API PROJECT')
})

app.use(require('./src/errorHandler'))

app.listen(PORT,()=> console.log(`Server Running on http://${HOST}:${PORT}`))