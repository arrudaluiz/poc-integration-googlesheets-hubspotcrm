import { Router } from 'express';
import ContactController from './controllers/ContactController.js'

const routes = Router();
const { listContacts, createContacts } = ContactController;

routes.get('/contacts', listContacts);
routes.post('/contacts', createContacts);

export default routes;