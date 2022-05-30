module.exports = (sequelize, Sequelize) => {
    const Diretor = sequelize.define('diretor', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pergunta_secreta: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        },
        turma: {
            type: Sequelize.STRING,
            allowNull: false
        },
        turno: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Diretor;
}