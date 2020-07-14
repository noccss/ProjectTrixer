const connection = require('../database/connection');
const multer = require('multer');
const multerConfig = require('../config/multer');

const crypto = require('crypto');

module.exports = {
    async index(req,res) {
        const freelancer = await connection('Freelancer').select('*');

        return res.json(freelancer);
    },

    async create(req,res) {
        const { nome, sobrenome, email, senha, bio, city, uf, cpf, whatsapp, skills, sexo, cartao, cvc, expDate, titular, proposta, picture } = req.body;

        const rank = 'Bronze';

        // multer(multerConfig).single('file'), (req, res) => {
        //     const picture = req.file.filename;

        //     return picture;
        // };

        // const picture = req.file.filename;

        const cargo = 'Freelancer';
        const id = crypto.randomBytes(4).toString('HEX');

        const cash = 0;

        // picture = 'padrao';

        const freelancer = await connection('Freelancer').insert({
            id,
            picture,
            nome,
            sobrenome,
            sexo,
            email,
            senha,
            bio,
            city,
            uf,
            cpf,
            whatsapp,
            skills,
            cargo,
            rank,
            cash,
            proposta,
            cartao,
            cvc,
            expDate,
            titular
        });

        return res.json({ id, cargo });
    },

    async register2(req, res) {
        const { city, uf, skills, whatsapp } = req.body;

        const id = req.headers.authorization;

        const freelancer = await connection('Freelancer')
            .where('id', id)
            .update({
                city: city,
                uf: uf,
                skills: skills,
                whatsapp: whatsapp
            })
        
        return res.json('Sucesso');
    },

    async register3(req, res) {
        const { picture, bio, facebook, linkedin } = req.body;

        const id = req.headers.authorization;

        const freelancer = await connection('Freelancer')
            .where('id', id)
            .update({
                picture: picture,
                bio: bio,
                facebook: facebook,
                linkedin: linkedin
            })

        return res.json('Sucesso');
    }

    // async register3(req, res) {
    //     const { bio } = req.body;
    // }
}