const express = require('express')
const app = express()
const router = express.Router()

const PORT = 7542

app.get("/",(req , res)=>{
    // res.send(200,{
    //     message:"welcome"
    // })
    // res.status(202).send({message:"workwork"})
    res.send(202,{
        message:"here!"
    })
})

app.listen(PORT,() => console.log("devam edelimworking!!!"))