const connection = require('../database/connection');
const { update } = require('../database/connection');

module.exports = {
    async index(req, res) {
        const id = req.headers.authorization;

        const profile = await connection('Client')
            .where('id', id)
            .select('*');
        
        return res.json(profile);

    },

    async indexFreela(req, res) {
        const id = req.headers.authorization;

        const profileFreelancer = await connection('Freelancer')
            .where('id', id)
            .select('*');

        return res.json(profileFreelancer);
    },

    async update(req, res) {
        const { nome, senha, bio, city, uf } = req.body;
        const id = req.headers.authorization;

        const updateProfile = await connection('Freelancer')
            .where('id', id)
            .update({
                nome: nome,
                senha: senha,
                bio: bio,
                city: city,
                uf: uf
            });

        return res.json(updateProfile);
    }
}