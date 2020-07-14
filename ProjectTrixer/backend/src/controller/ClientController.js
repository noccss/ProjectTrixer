const connection = require('../database/connection');
const crypto = require('crypto');

const multer = require('multer');
const multerConfig = require('../config/multer');

module.exports = {
    async index(req, res) {
        const cliente = await connection('Client').select('*');

        return res.json(cliente);
    },

    async create(req, res) {
        const { nome, sobrenome, email, senha, bio, city, uf, cpf, whatsapp, sexo, cartao, cvc, expDate, titular, picture } = req.body;
        const rank = 'Bronze';

        // multer(multerConfig).single('file'), (req, res) => {
        //     const picture = req.file.filename;

        //     return picture;
        // };

        // const picture = req.file.filename;

        const cargo = 'Cliente';
        const id = crypto.randomBytes(4).toString('HEX');

        const cash = 0;

        // picture = 'padrao';

        const cliente = await connection('Client').insert({
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
            cargo,
            rank,
            cash,
            cartao,
            cvc,
            expDate,
            titular
        });

        return res.json({ id, cargo });
    },

    async register2(req, res) {
        const { city, uf, whatsapp } = req.body;

        const id = req.headers.authorization;

        const cliente = await connection('Client')
            .where('id', id)
            .update({
                city: city,
                uf: uf,
                whatsapp: whatsapp
            })
        
        return res.json('Sucesso');
    },

    async register3(req, res) {
        const { picture, bio, facebook, linkedin } = req.body;

        const id = req.headers.authorization;

        const cliente = await connection('Client')
            .where('id', id)
            .update({
                picture: picture,
                bio: bio,
                facebook: facebook,
                linkedin: linkedin
            })

        return res.json('Sucesso');
    }
}