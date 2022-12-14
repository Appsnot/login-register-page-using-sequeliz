const Sequelize = require('sequelize')

const sequelize = new Sequelize('bookingsRegistration','root','password',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize















/*
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/bookingsRegistration"
).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
})
/** */