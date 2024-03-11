'use strict'

const book = require('../controller/book.controller')

const router = require("express").Router()
 

router.route('/')
    .get(book.list)
    .post(book.create)

router.route('/:id')
    .get(book.read)
    .put(book.update)
    .patch(book.update)
    .delete(book.delete)


module.exports = router