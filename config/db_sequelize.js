const Sequelize = require('sequelize');
const sequelize = new Sequelize('web3_db', 'postgres', 'leandro1710', {
    host: 'localhost',
    dialect: 'postgres'
})

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('../models_postgres/usuario.js')(sequelize, Sequelize);

module.exports = db;