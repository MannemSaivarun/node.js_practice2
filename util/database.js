const Sequelize = require('sequelize');

const sequelize = Sequelize('node-practice','root','Msv@1234',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;