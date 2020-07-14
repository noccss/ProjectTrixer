const connection = require('../database/connection');
const multer = require('multer');
const multerConfig = require('../config/multer');
const { prop } = require('./PropostaController');

module.exports = {
    async updateFreelancer(req, res) {
        const freelancer = req.headers.authorization;
        const { bio } = req.body;

        const up = await connection('Freelancer')
            .where('id', freelancer)
            .update('bio', bio);

        return res.json(up);
    },

    async updateSkills(req, res) {
        const freelancer = req.headers.authorization;
        const { skills } = req.body;

        const up = await connection('Freelancer')
            .where('id', freelancer)
            .update('skills', skills);

        return res.json(up);
    },

    async updateClient(req, res) {
        const cliente = req.headers.authorization;
        const { bio } = req.body;

        const up = await connection('Client')
            .where('id', cliente)
            .update('bio', bio);

        return res.json(up);
    },

    // async multer,updatePicture(req, res) {
    //     const id = req.headers.authorization;

    //     const picture = multer(multerConfig).single('file');
    //     // const picture = multer(multerConfig).single('file') = req.file.filename;

    //     const update = await connection('Freelancer')
    //         .where('id', id)
    //         .update('nome', picture);
        
    //     return res.json(update);
    // }
}