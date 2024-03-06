"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// MODELS
const { Sequelize, DataTypes} = require('sequelize')

// sequelize instant olusturma

const sequelize = new Sequelize('sqlite:./db.sqlite3')

// definemethodu sequelize modeli oluşturur:
// her bir model, veritabanında bir tabloya denk gelir.
// sequelize.define('tableName', { modelDetails })

const Todo = sequelize.define('todos', {
    //* ilk sütun olarak id sutunu sequelize tarafından otomatik oluşturulur/yönetilir.
    // anyField: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false, // default: true  ilk 3 özellikle önemli
    //     unique: true, // default: false
    //     comment:'description',
    //     primaryKey: true, // default : false
    //     autoIncrement: true, // default: false
    //     field:'custom_name',
    //     defaultValue:'default', //default:null

    // }
    title:{
        type:DataTypes.STRING,
        allowNull: false,
    

    },
    description: DataTypes.TEXT, // SHORTHAND USING
    priority:{ //-1: low, 0:normal 1:high
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue: 0,
    }, // shorthand using
    isDone:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
    }

    //? NOT NEED DEFINE CREATED & UPDATEDAT fields.
    //? createdAt ve updatedAt-- sequelize can create automatically and manage them.

})

// Syncronization:
// model bilgilerini db'ye uygula:

// sequelize.sync() // CREATE TABLE  (ONCE)
// sequelize.sync({ force: true}) // DROP TABLE & CREATE TABLE
// sequelize.sync({  alter: true}) // TOBACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP 


// Connect to db:
sequelize.authenticate()
    .then(() => console.log('* DB Connected'))
    .catch(() => console.log('* DB Not Connected'))



 module.exports = Todo   
    /* ------------------------------------------------------- */