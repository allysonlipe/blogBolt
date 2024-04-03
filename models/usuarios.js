const Sequelize = require('sequelize');
const db = require('./db');


const Usuarios = db.define(`usuarios`, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    foto_url: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ispost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
},)


Usuarios.sync({ alter: true });
module.exports = Usuarios;