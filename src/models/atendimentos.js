const db = require("../database");

const {DataTypes} = require("sequelize");

const atendimento = db.define("Atendimento", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pacienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM("consulta", "retorno"),
        allowNull: false,
    },
    observacoes: {
        type: DataTypes.STRING,
    }
}, {
    tableName: "atendimentos",
    timestamps: true,
});

module.exports = atendimento;