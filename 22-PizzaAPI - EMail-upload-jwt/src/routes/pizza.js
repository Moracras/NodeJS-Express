"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require('../controllers/pizza')
const { isAdmin } = require('../middlewares/permissions')

// URL: /pizzas


//* UPLOAD
//? $npm i multer // accepting form-data (datatype), uploading files
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require('multer')
const upload = multer({
    // dest: './uploads',
    storage: multer.diskStorage({
        destination:'./uploads',
        filename: function(req,file, returnCallback){
            // returnCallback(error, filename)
            // returnCallback(null, 'qadir.jpg')
            // console.log(file)
        }
    })
})

router.route('/')
    .get(pizza.list)
    .post(isAdmin,  pizza.create)
    // .post(isAdmin, upload.single('fieldName'), pizza.create)
    // .post(isAdmin, upload.array('fileInputName'), pizza.create)
    // .post(isAdmin, upload.any(), pizza.create)

router.route('/:id')
    .get(pizza.read)
    .put(isAdmin, pizza.update)
    .patch(isAdmin, pizza.update)
    .delete(isAdmin, pizza.delete)

/* ------------------------------------------------------- */
module.exports = router