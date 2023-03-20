const express = require('express');

const pacientesController = require('../controllers/pacientes');
const validatePacientes = require ('../middlewares/auth');

const psicologoController = require("../controllers/psicologos");
const psicologosValidation = require ("../middlewares/auth");

const atendimentosController = require('../controllers/atendimentos');
const atendimentoValidation = require ("../middlewares/auth");
const auth = require ("../middlewares/auth");

const router = express.Router();


//PACIENTES
router.get('/pacientes', pacientesController.listar);
router.get('/pacientes/:id', pacientesController.listarID);
router.post('/pacientes', validatePacientes, pacientesController.cadastrar);
router.put('/pacientes/:id', validatePacientes, pacientesController.atualizar);
router.delete('/pacientes/:id',validatePacientes, pacientesController.deletar);

//PSICOLOGOS
router.get("/psicologo/listar", psicologoController.listar);
router.get("/psicologos/:id", psicologoController.listarID);
router.post("/psicologos",psicologosValidation, psicologoController.cadastrar);
router.put("/psicologos/:id",psicologosValidation , psicologoController.atualizar);
router.delete("/psicologos/:id", psicologoController.deletar)

//ATENDIMENTOS
router.get('/atendimentos', atendimentosController.listar);
router.get('/atendimentos/:id', atendimentosController.listarID);
router.post('/atendimentos',atendimentoValidation, auth, atendimentosController.cadastrar);

module.exports = router;