'use strict'

const express = require('express')
const app = express()
const PORT = 8000

// const middleFunction1=(req,res,next) =>{
//     // console.log(req);

//     console.log(`${req.method},${req.url}`);

//     const{a,b} = req.query
//     // console.log(a,b);
//     // console.log(req.query.a);
//     // const total = Number(a) + Number(b)
//     // console.log(total);
//     req.total = Number(a) + Number(b)
//     // burada global bir degisken olusturduk ve diger middlewarede ulasilmasini sagladik.
//     next()
// }
// const middleFunction2=(req,res,next) =>{
//     console.log("middleware 2 is run2");
//     // console.log(req.total);
    
//     next()
// }
const [middleFunction1,middleFunction2] = require('./middlewares')

app.use(middleFunction1,middleFunction2)

app.all('/',(req,res) =>{
    const {total} = req
    
    res.send({
        message:"welcome",
        total
    })
})

app.listen(PORT, ()=>{
    console.log(`server is run ${PORT}`);
})