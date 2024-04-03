const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

sequelize.authenticate().then(function () {
    console.log("Conexão com o banco de dados realizada com sucesso.")
}).catch(function () {
    console.log("Erro ao se conectar com banco de dados.")
})

module.exports = sequelize;