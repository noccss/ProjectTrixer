const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { email, senha } = req.body;

        const client = await connection('Client')
            .where('email', email)
            .where('senha', senha)
            .select('id', 'nome', 'cargo')
            .first();

        if(!client) {
            return res.status(400).json({ error: 'Cliente não encontrado' });
        }

        return res.json(client);
    },

    async createFree(req, res) {
        const { email, senha } = req.body;

        const freelancer= await connection('Freelancer')
            .where('email', email)
            .where('senha', senha)
            .select('id', 'nome', 'cargo')
            .first();

        if(!freelancer) {
            return res.status(400).json({ error: 'Freelancer não encontrado' });
        }

        return res.json(freelancer);
    }
}