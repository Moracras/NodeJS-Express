"use strict"

const { CustomError } = require("../errors/customError")
const { Todo } = require("../models/todo.model")
const mongoose = require("mongoose")

const todo = {
    list: async(req,res) =>{
        const data = await Todo.find({})
        res.status(200).send({})
    },
    create: async(req,res) =>{
        const data = await Todo.create(req.body)
        res.status(201).send({
            body:data,
            isError: false,
        })
    },
    read: async(req,res) =>{
        const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id)
        if(!idIsValid) throw new CustomError("id is not vlaid", 400)
        const data = await Todo.findOne({ _id: req.params.id})
        res.status.send({})
    },
    update: async(req,res) =>{
        res.status.send({})
    },
    delete: async(req,res) =>{
        res.status.send({})
    },
}