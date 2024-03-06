"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// CONTROLLER

const Todo = require('../models/todo.model')

module.exports = {

    list: async(req, res)=>{
 
        // const data =await Todo.findAll()
        const data =await Todo.findAndCountAll()
        
        res.status(200).send({
            error:false,
            result:data
        })
    },

    // CRUD:

    create:async(req, res) =>{
 
        // const receivedData = req.body
    
        // const data = await Todo.create({
        //     title: receivedData.title,
        //     description: receivedData.description,
        //     priority: receivedData.priority,
        //     isDone: receivedData.isDone
        // })
    
        const data = await Todo.create(req.body)
    
        res.status(201).send({
            error:false,
            result: data.dataValues
        })
        console.log(data);
     },

    read:async(req, res)=>{
     
        // const data = await Todo.findOne({ where: { id:req.params.id}})
        const data = await Todo.findByPk(req.params.id)
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    update:async(req, res)=>{
 
        // const data = Todo.update({...newData},{...where})
        const data =await Todo.update(req.body, {where: {id: req.params.id}})
    
        res.status(202).send({
            error:false,
            message:'Updated',
            body: req.body, // gönderdigimiz veriyi göster
            result:data,
            new: await Todo.findByPk(req.params.id) // güncellenmis veriyi de göster
    
        })
    },

    delete:async (req, res) =>{
 
        // const data = Todo.destroy({ ...where})
        const data = await Todo.destroy({ where: {id: req.params.id } })
    
        // res.status(204).send({
        //     error:false,
        //     message:'Successfully Deleted',
        //     result: data
        // })
        if (data > 0){// if deleted successfully}
            res.sendStatus(204)
        }else{
            res.status(404).send({
                error:true,
                result:data
            })
            //? ErrorHandlera havale edebiliriz:
            res.errorStatusCode = 404
            throw new Error('Not Found.')
        }
    }

}