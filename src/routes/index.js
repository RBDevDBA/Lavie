const express = require("express");
const pacienteController = require("../controllers/paciController");
const psicologoController = require("../controllers/psicoController");
const routes = express.Router();

routes.get("/paciente/listar", pacienteController.listarPaciente);
routes.post("/paciente/cadastrar", pacienteController.cadastrarPaciente);
routes.delete("/paciente/:id/deletar", pacienteController.deletarPaciente);
routes.put("/paciente/:id/atualizar", pacienteController.atualizarPaciente);

routes.get("/psicologo/listar", psicologoController.listarPsicologo);
routes.post("/psicologo/cadastrar", psicologoController.cadastrarPsicologo);
routes.delete("/psicologo/:id/deletar", psicologoController.deletarPsicologo);
routes.put("/psicologo/:id/atualizar", psicologoController.atualizarPsicologo);


module.exports = routes;