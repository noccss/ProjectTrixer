const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
        const { id_de } = req.params;

            const chat = await connection('Chat')
                .join('Freelancer', 'Freelancer.id', '=', 'Chat.id_de')
                .join('Client', 'Client.id', '=', 'Chat.id_para')
                .where('Chat.id_de', id_de)
                .select([
                    'Chat.*',
                    'Client.*'
                ]);

                return res.json(chat);
    },

    async indexCli(req, res){
        const { id_para } = req.params;

        const chat = await connection('Chat')
            .join('Freelancer', 'Freelancer.id', '=', 'Chat.id_de')
            .join('Client', 'Client.id', '=', 'Chat.id_para')
            .where('Chat.id_para', id_para)
            .select([
                'Chat.*',
                'Freelancer.*'
            ]);

            return res.json(chat);
    },

    async indexHeader(req, res) {
        const id_de = req.headers.authorization;

            const chat = await connection('Chat')
                .where('id_de', id_de)
                .orWhere('id_para', id_de)
                .select('*');

            return res.json(chat);

    },

    async create(req, res) {
        const { id_para } = req.params;
        const id_de = req.headers.authorization;

        const id = crypto.randomBytes(4).toString('HEX');

        const chat = await connection('Chat')
            .insert({
                id,
                id_para,
                id_de
            });

        return res.json({ id });
    },

    async locale(req, res) {
        const { id_para } = req.params;
        const id_de = req.headers.authorization;

        const chat = await connection('chat')
            .where('id_para', id_para)
            .where('id_de', id_de)
            .orWhere('id_para', id_de)
            .where('id_de', id_para)
            .select('*')
            .first();

        return res.json(chat);
    },

    async local(req, res) {
        const { id_para } = req.params;
        const id_de = req.headers.authorization;

        const chat = await connection('Chat')
            .join('Client', 'Client.id', '=', 'Chat.id_para')
            .where('Chat.id_para', id_para)
            .where('Chat.id_de', id_de)
            .orWhere('Chat.id_para', id_de)
            .where('Chat.id_de', id_para)
            .select([
                'Chat.*',
                'Client.*'
            ])
            .first();

        return res.json(chat);
    }
}