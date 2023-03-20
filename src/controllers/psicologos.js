const {psicologos} = require("../models/index");

const psicoController = {
    listar: async(req, res) => {
        const listarPsicologos = await psicologos.findAll();
        res.json(listarPsicologos);
    },

    listarID: async (req, res) => {
      const { id } = req.params;
    },

    async cadastrar(req, res) {

        const {nome, email, senha, apresentacao} = req.body;
        const novoPsicologo = await psicologos.create({
            nome,
            email,
            senha,
            apresentacao,            
        });

        res.json(novoPsicologo)
    },

    async deletar (req, res){

        const {id} = req.params;
        await psicologos.destroy({
            where: {
                id,
            }
        });

        res.json("Psicologo deletado com sucesso!")
    },

    async atualizar (req, res){

        const {id} = req.params;
        const {nome, email, senha, apresentacao} = req.body;
        const psicologoAtualizado = await psicologos.update({
            nome,
            email,
            senha,
            apresentacao,            
        },
        {
            where: {
                id,
            },
        })

        res.json("Atualização concluída !")
    },
};

module.exports = psicoController;