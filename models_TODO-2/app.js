"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express()

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())


// Catch async-errors:
require('express-async-errors')

// app.all('/', (req, res) => { ///  ALLOW ALL METHODS. ALL ==> URL = / use -> URL=/*
//     res.send('WELCOME TO TODO API')
// })

/* ------------------------------------------------------- */
// continue from here...

// MODELS
// const { Sequelize, DataTypes} = require('sequelize')

// // sequelize instant olusturma

// const sequelize = new Sequelize('sqlite:./db.sqlite3')

// // definemethodu sequelize modeli oluşturur:
// // her bir model, veritabanında bir tabloya denk gelir.
// // sequelize.define('tableName', { modelDetails })

// const Todo = sequelize.define('todos', {
//     //* ilk sütun olarak id sutunu sequelize tarafından otomatik oluşturulur/yönetilir.
//     // anyField: {
//     //     type: DataTypes.INTEGER,
//     //     allowNull: false, // default: true  ilk 3 özellikle önemli
//     //     unique: true, // default: false
//     //     comment:'description',
//     //     primaryKey: true, // default : false
//     //     autoIncrement: true, // default: false
//     //     field:'custom_name',
//     //     defaultValue:'default', //default:null

//     // }
//     title:{
//         type:DataTypes.STRING,
//         allowNull: false,
    

//     },
//     description: DataTypes.TEXT, // SHORTHAND USING
//     priority:{ //-1: low, 0:normal 1:high
//         type:DataTypes.TINYINT,
//         allowNull:false,
//         defaultValue: 0,
//     }, // shorthand using
//     isDone:{
//         type:DataTypes.BOOLEAN,
//         allowNull:false,
//         defaultValue:false,
//     }

//     //? NOT NEED DEFINE CREATED & UPDATEDAT fields.
//     //? createdAt ve updatedAt-- sequelize can create automatically and manage them.

// })

// // Syncronization:
// // model bilgilerini db'ye uygula:

// // sequelize.sync() // CREATE TABLE  (ONCE)
// // sequelize.sync({ force: true}) // DROP TABLE & CREATE TABLE
// // sequelize.sync({  alter: true}) // TOBACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP 


// // Connect to db:
// sequelize.authenticate()
//     .then(() => console.log('* DB Connected'))
//     .catch(() => console.log('* DB Not Connected'))

    /* ------------------------------------------------------- */
    // MODEL IMPORT 

    const Todo = require('./todo.model')





    /* ------------------------------------------------------- */

 //ROUTERS:

const router = express.Router()

// LISTTODOS:
router.get('/', async(req, res)=>{

    // const data =await Todo.findAll()
    const data =await Todo.findAndCountAll()
    
    res.status(200).send({
        error:false,
        result:data
    })
})

//? CRUD PROCESSES:

// CREATE TODO
 router.post('/',async(req, res) =>{

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
 })

// READ TODO:
router.get('/:id', async(req, res)=>{
    
    // const data = await Todo.findOne({ where: { id:req.params.id}})
    const data = await Todo.findByPk(req.params.id)

    res.status(200).send({
        error: false,
        result: data
    })
})

// UPDATE TODO
router.put('/:id',async(req, res)=>{

    // const data = Todo.update({...newData},{...where})
    const data =await Todo.update(req.body, {where: {id: req.params.id}})

    res.status(202).send({
        error:false,
        message:'Updated',
        body: req.body, // gönderdigimiz veriyi göster
        result:data,
        new: await Todo.findByPk(req.params.id) // güncellenmis veriyi de göster

    })
})

// DELETE TODO;

router.delete('/:id', async (req, res) =>{

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
})




app.use(router)




/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));