"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
/*

{
    "username": "admin",
    "password": "aA*123456",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isStaff": true,
    "isAdmin": true
}
{
    "username": "staff",
    "password": "aA*123456",
    "email": "staff@site.com",
    "firstName": "staff",
    "lastName": "staff",
    "isActive": true,
    "isStaff": true,
    "isAdmin": false
}
{
    "username": "test",
    "password": "aA*123456",
    "email": "test@site.com",
    "firstName": "test",
    "lastName": "test",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false
}
/* ------------------------------------------------------- */

const UserSchema = new mongoose.UserSchema({

    username: {
        type:String,
        trim:true,
        required:true,
        unique:true,
        index:true,
    },
    password:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        index:true
    },
    // firstName: String
    firstName:{
        type: String,
        trim:true,
        required:true
    },
    lastName:{
        type:String,
        trim:true,
        required: true
    }
},)