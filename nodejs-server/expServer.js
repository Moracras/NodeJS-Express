'use strict'
/*
NODEJS SERVER
*/
require('dotenv').config();
//  const PORT = process.env.PORT
//  const HOST = process.env.HOST
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"
// console.log('welcome');
//npm i express
const express = require("express")
const app = express()


console.log("express server");

app.get('/', (req, res)=> {
    res.send("express deneme")
})

app.listen(PORT, () => console.log(`server runned http://${HOST}:${PORT}`))