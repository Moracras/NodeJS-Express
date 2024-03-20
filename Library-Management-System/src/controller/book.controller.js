'use strict'

require("express-async-error")

const {Book} = require("../models/book.model")


module.exports={
    list: async(req,res) =>{
        const data = await Book.findAndCountAll()
        res.status(200).send({
            error:false,
            data
        })
    },
    create: async(req,res) =>{
        const data = await Book.create(req.body)
        res.status(201).send({
            error:false,
            data:data
        })
    },
    read: async(req,res) =>{
        const data = await Book.find({id:req.params.id})
        res.status(202).send({
            error:false,
            result:data
        })
    },
    update: async(req,res) =>{
        const data = await Book.update(req.body,{where:{id: req.params.id}})

        res.status(202).send({
            error:false,
            message:'Updated',
            body:req.body,
            result:data,
            new: await Book.findByPk(req.params.id)
        })
    },
    delete: async(req,res)=>{
        const data = await Book.destroy({where: {id: req.params.id}})

        if(data >0){
            res.sendStatus(204)

        }else{
            res.status(404).send({
                error:true,
                result:data
            })
            
            
        }
    }

}