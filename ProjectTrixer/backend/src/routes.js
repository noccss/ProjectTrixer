const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const ClientController = require('./controller/ClientController');
const ProductsController = require('./controller/ProductsController');
const SessionController = require('./controller/SessionController');
const ProfileController = require('./controller/ProfileController');
const DetailsController = require('./controller/DetailsController');
const FreelancerController = require('./controller/FreelancerController');
const ChatController = require('./controller/ChatController');
const MessagesController = require('./controller/MessagesController');
const ConfigProfile = require('./controller/ConfigProfile');
const PropostaController = require('./controller/PropostaController');
const connection = require('./database/connection');

routes.post('/picture', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file.filename);
    
    return res.json({ hello: 'Rocketseat' });
});

routes.get('/cliente', ClientController.index);
routes.post('/cliente', ClientController.create);
routes.post('/cliente2', ClientController.register2);
routes.post('/cliente3', ClientController.register3);

routes.get('/products', ProductsController.index);
routes.post('/products', ProductsController.create);
routes.delete('/products/:id', ProductsController.delete);

routes.get('/details/:id', DetailsController.index);

routes.post('/sessions', SessionController.create);
routes.post('/session', SessionController.createFree);
routes.get('/profile', ProfileController.index);

routes.get('/freelancer', FreelancerController.index);
routes.get('/profileFreelancer', ProfileController.indexFreela);
routes.post('/proposta/:client', PropostaController.proposta);
routes.get('/proposta/:id', PropostaController.prop);
routes.post('/config/profile', ProfileController.update);
routes.post('/freelancer', FreelancerController.create);
routes.post('/freelancer2', FreelancerController.register2);
routes.post('/freelancer3', FreelancerController.register3);


routes.get('/chat', ChatController.indexHeader);
routes.get('/chat/:id_de', ChatController.index);
routes.get('/chats/:id_para', ChatController.indexCli);

routes.post('/chat/:id_para', ChatController.create);
routes.get('/locale/:id_para', ChatController.locale);
routes.get('/local/:id_para', ChatController.local);

routes.post('/chat/:id_chat/y/:id_para', MessagesController.create);
routes.get('/message', MessagesController.index);
routes.get('/message/:id_chat/:id_para', MessagesController.show);

routes.post('/config', ConfigProfile.updateFreelancer);
routes.post('/configs', ConfigProfile.updateClient);
routes.post('/configSkill', ConfigProfile.updateSkills);

routes.post('/foto', multer(multerConfig).single('file'), async (req,res) => {
    const { filename } = req.file;

    const foto = await connection('Freelancer')
        .update('picture', filename)

    return res.json(foto);
});

module.exports = routes;