const connection = require('../database/connection');

module.exports = {
    async proposta(req, res) {
        const { client } = req.params;
        const { id_prop, proposta } = req.body;

        const up = await connection('Products')
            .where('client_id', client)
            .where('id', id_prop)
            .update({
                proposta: proposta + 1
            });

        return res.json({proposta});
    },

    async prop(req, res) {
        const { id } = req.params;

        const propost = await connection('Products')
            .where('id', id)
            .select('*')

        return res.json(propost);
    }
}