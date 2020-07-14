const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('Products').count();

        const product = await connection('Products')
            .join('Client', 'Client.id', '=', 'Products.client_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'Products.*',
                'Client.nome',
                'Client.whatsapp'
            ])
            .orderBy('id', 'desc');

        res.header('X-Total-Count', count['count(*)']);

        return res.json(product);
    },

    async create(req, res) {
        const { title, description, value, skills } = req.body;
        const client_id = req.headers.authorization;

        const [id] = await connection('Products').insert({
            title,
            description,
            value,
            skills,
            client_id
        })

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;
        const client_id = req.headers.authorization;

        const product = await connection('Products')
            .where('id', id)
            .select('client_id')
            .first();

        if(product.client_id != client_id ) {
            return res.status(400).json({ error: 'Você não tem permissão para deletar'});
        }

        await connection('Products').where('id', id).delete();

        return res.status(204).send();
    }
}