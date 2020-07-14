const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const message = await connection('Messages').select('*');

        return res.json(message);
    },

    async show(req, res) {
        const { id_chat, id_para } = req.params;
        const id_de = req.headers.authorization;

        const message = await connection('Messages')
            .where('id_chat', id_chat)
            .where('id_de', id_de)
            .orWhere('id_chat', id_chat)
            .where('id_para', id_de)
            .select('*');

        return res.json(message);
    },

    async create(req, res) {
        const { id_chat, id_para } = req.params;
        const id_de = req.headers.authorization;

        const { mensagem } = req.body;

        const [id] = await connection('Messages')
            .insert({
                id_para,
                id_de,
                id_chat,
                mensagem
            });

        return res.json({ id });
    }
}