'use strict'

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000;

app.use(express.json())

require('express-async-error')



app.use(require('./src/models/book'))





app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT))


