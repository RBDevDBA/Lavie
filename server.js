const express = require('express');
const app = express();
const rotas = require('./src/routes/rotas');

app.use('/', rotas)
app.use(express.json());



app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080: http://localhost:8080")
});