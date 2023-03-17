const {pacientes} = require("../models/index");
const paciController = {
    listarPaciente: async(req, res) => {
        const listarPacientes = await pacientes.findAll();
        res.json(listarPacientes);
    },

    async cadastrarPaciente(req, res) {
        const {nome, email, idade} = req.body;
        const novoPaciente = await pacientes.create({
            nome,
            email,
            idade          
        });

        res.json(novoPaciente)
    },

    async deletarPaciente (req, res){

        const {id} = req.params;

        await pacientes.destroy({
            where: {
                id,
            }
        });

        res.json("Paciente deletado com sucesso!")
    },

    async atualizarPaciente (req, res){

        const {id} = req.params;
        const {nome, email, idade} = req.body;

        const pacienteAtualizado = await pacientes.update({
            nome,
            email,
            idade
        },

        {
            where: {
                id,
            },
        })

        res.json("Atualização concluída!")
    },
};

module.exports = paciController;