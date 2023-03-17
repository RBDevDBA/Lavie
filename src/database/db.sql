CREATE DATABASE dblavie;
USE dblavie;
CREATE TABLE psicologos(
    id INTEGER UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(120) NOT NULL,
    email varchar(60) UNIQUE NOT NULL,
    senha varchar(161) NOT NULL,
    apresentacao text NOT NULL
);
CREATE TABLE pacientes(
    id INTEGER UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(120) NOT NULL,
    email varchar(60) UNIQUE NOT NULL,
    idade DATE NOT NULL
);
CREATE TABLE atendimentos(
    id INTEGER UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data_atendimento DATE NOT NULL,
    observacao text NOT NULL,
    psicologo_id INTEGER NOT NULL,
    paciente_id INTEGER NOT NULL,
    FOREIGN KEY (psicologo_id) REFERENCES psicologos(id),
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id)
);