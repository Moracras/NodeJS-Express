'use strict'
/* EXPRESSJS - MONGODB CONNECTION MONGOOSE */

const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/blogAPI')
// const MONGODB = process.env.MONGODB

mongoose.connect('mongodb://localhost:27017/blogAPI')
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB IS NOT CONNECTED",err))