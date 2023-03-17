const express = require("express");
const routes = require("./routes");
const app = express(app.js);
const db = require("./database");

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(3300, () => console.log('Servidor rodando na porta 3300'));