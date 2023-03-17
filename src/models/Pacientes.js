const db = require("../database");

const {DataTypes} = require("sequelize");

const pacientes = db.define("Pacientes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        
    },
    email:{
        type: DataTypes.STRING
    },
    
    idade:{
        type: DataTypes.DATE
    }

}, {
    tableName: "pacientes",
    timestamps: true,
});

module.exports= pacientes;