const Sequelize = require('sequelize');
const sequelize = new Sequelize('Proj_Integrador', 'postgres', 'leandro1710', {
    host: 'localhost',
    dialect: 'postgres'
})

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('../models_postgres/usuario.js')(sequelize, Sequelize);
db.Diretor = require('../models_postgres/diretor.js')(sequelize, Sequelize);

module.exports = db;