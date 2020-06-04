import { Router } from 'express';
import UsuarioController from './app/controller/UsuarioController';
// import Usuario from './app/models/Usuario';

const routes = new Router();

routes.post('/usuarios', UsuarioController.inclui);

export default routes;
