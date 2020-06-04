import { Router } from 'express';
import UsuarioController from './app/controller/UsuarioController';
import PessoaController from './app/controller/PessoaController';
// import Usuario from './app/models/Usuario';

const routes = new Router();

routes.post('/usuarios', UsuarioController.inclui);
routes.post('/pessoas', PessoaController.inclui);
export default routes;
