const {psicologos} = require("../models/index");

const psicoController = {
    listarPsicologo: async(req, res) => {
        const listarPsicologos = await psicologos.findAll();
        res.json(listarPsicologos);
    },

    async cadastrarPsicologo(req, res) {

        const {nome, email, senha, apresentacao} = req.body;
        const novoPsicologo = await psicologos.create({
            nome,
            email,
            senha,
            apresentacao,            
        });

        res.json(novoPsicologo)
    },

    async deletarPsicologo (req, res){

        const {id} = req.params;
        await psicologos.destroy({
            where: {
                id,
            }
        });

        res.json("Psicologo deletado com sucesso!")
    },

    async atualizarPsicologo (req, res){

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