'use strict'


const { Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('sqlite:./db.sqlite3')


const Book = sequelize.define('books',{

    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    author:{
        type:DataTypes.CHAR,
        allowNull:false,

    },
    ISBN:{
        type:DataTypes.CHAR,
        allowNull:false,

    },
    genre:{
        type:DataTypes.CHAR,
        allowNull:false,
    },
    publicationYear:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    image:{
        type:DataTypes.TEXT,
        allownull:true,
    }

    

})

// sequelize.sync()
// sequelize.sync({ force: true}) 
// sequelize.sync({  alter: true})

sequelize.authenticate()
.then(()=> console.log('*DB CONNECTED'))
.catch(()=> console.log('* DB NOT CONNECTED'))


module.exports = Book