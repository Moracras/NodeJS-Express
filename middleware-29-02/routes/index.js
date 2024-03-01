"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

/* express.Router() */
// const express = require('express')
// const router = express.Router()

const router =require('express').Router()

// router.get('/', (req, res) => res.send({ message: "Home Area" }))
// router.get('/about', (req, res) => res.send({ message: "About Area" }))
// router.get('/user/:id', (req, res) => res.send({ message: "User Area" }))


//? router.route()

const {middleFunc1,middleFunc2} = require('../middlewares/')

router.use(middleFunc1, middleFunc2)

// Write a router that matches /abc or /acd path. 111
// router.route(/\/abc|\/acd/) 
// .get((req, res) => res.send( 'message: "get"' ))

//Write a router that matches /a(any single digit)/ followed by 2 times c or 3 times c or / 222222222222222
// router.route(/\/a\d{1}c{2}|\/a\d{1}c{3}/)
// .get((req, res) => res.send( 'message: "get"' ))

// Routes that must end with string "Hello" and can have any no. of any character before that . 3333

// router.route(/\/*Hello/)
// .get((req, res) => res.send( 'message: "get"' ))

// Matching routes must end with the string "Hello" and must not have any characters before that. 4444
// router.route(/^\/Hello$/)
// .get((req, res) => res.send( 'message: "get"' ))

//5555555555555555555555// I have an object with student information. Code the desired routers.
// Returns all students in json format with the get method
// returns information about the requested student in json format
// If there is any missing/error in the code, please correct it.
const students = [
    {
    id: 1,
    name: "Alex",
    },
    {
    id: 2,
    name: "Steve",
    },
   ];
   

   router.route(/^\/Hello$/)
   .get((req, res) => res.send( 'message: "get"' ))
// router.route('/')
//     .get((req, res) => res.send( 'message: "get"' ))
//     .post((req, res) => res.send({ message: "post" }))
//     .put((req, res) => res.send({ message: "put" }))
//     .delete((req, res) => res.send({ message: "delete" }))


module.exports = router

//? After finished router-design, it will call with middleware:
