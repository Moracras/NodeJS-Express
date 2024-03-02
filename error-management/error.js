"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// app.get('/', (req,res) =>{

//     // res.send('Hello')
//     throw new Error('ERROR')
// })
// app.get('/user/:id', (req,res) =>{

//     const id = req.params?.id || 0

//     try{
//         if(isNaN(id)){
//             throw new Error('ID is not a number', {cause:'params.id=' + id})
//         }else{
//             res.send({
//                 message:'OK',
//                 id
//             })
//         }
//     }catch (err){
    //* next içinde bir hata objesi gönderirsek, errorHandler yakalar.
            //  next(err)
//         res.send({
//             error:true,
//             message:err.message
//         })
//     }

   
  
// })


/* ------------------------------------------------------- */
//? ERROR HANDLER

// app.get('/*', (req,res) =>{

//     res.errorStatusCode = 404

//     throw new Error('ERROR',{ cause:'No reason :)'})
// })

//* ------------------------------------------------------- */

// const asyncFunction = async() =>{
//     throw new Error('Error in async-function')
// }
// //? Control with catch(next)
// app.get('/async', async(req,res ,next) =>{
//     await asyncFunction().then().catch(next) // Catch error by errorHandler
// })

/* ------------------------------------------------------- */
// $ npm i express-async-errors
require('express-async-errors')

app.get('/async', async(req, res ,next) =>{
    throw new Error('Error in async-function')
})

// /* ------------------------------------------------------- */
// /* ------------------------------------------------------- */
// const errorHandler = (err,req,res,next)=>{
//     console.log("errorHandler started");
//     const errorStatusCode = res?.errorStatusCode || 500
//     res.status(errorStatusCode).send({
//         error: true,
//         message: err.message,
//         cause: err.cause,
//         stack:err.stack, //* terminale yazması gereken hata mesajını json penceresinde gösterme
//     })
// }
// //? for run errorHandler call in use.
// //? It must be at last middleware.
app.use(require('./errorHandler'))
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));