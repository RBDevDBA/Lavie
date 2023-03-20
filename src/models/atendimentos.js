<<<<<<< HEAD
const db = require('../database/db');
const { DataTypes } = require('sequelize');
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    observacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    pacientes_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      Reference: {
        model: Pacientes,
        key: "id",
      },
    },
    psicologos_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      Reference: {
        model: Psicologos,
        key: "id",
      },
    },
  },

  {
    tableName: "atendimentos",
    underscored: true,
    timestamps: false,
  }
);

module.exports = Atendimentos;
=======
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
>>>>>>> origin/main
