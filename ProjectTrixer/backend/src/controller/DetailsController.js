const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        const product = await connection('Products')
            .join('Client', 'Client.id', '=', 'Products.client_id')
            .where('Products.id', id)
            .select([
                'Products.*',
                'Client.nome'
            ])
            .first();   

        return res.json(product);
    }
}