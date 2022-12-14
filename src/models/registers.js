const Sequelize = require("sequelize");
const sequelize = require("../db/conn");
const booking = sequelize.define('booking',{

    name:{
        type: Sequelize.STRING ,
        required:true,

    },
    email :{

        type:Sequelize.STRING,
        required: true,
        unique: true
    },
   password :{
        type: Sequelize.STRING(200),
        required:true,
        
    },
    password_salt :{
        type: Sequelize.STRING(200),
        required: true,
 }
})

booking.sync()

module.exports = booking;