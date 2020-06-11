import { Router } from 'express';
import UsuarioController from './app/controller/UsuarioController';
import PessoaController from './app/controller/PessoaController';
import LancamentoController from './app/controller/LancamentoController';
import AutenticadorController from './app/controller/AutenticadorController';
import authInterceptor from './app/middlewares/authInterceptor';
// import Usuario from './app/models/Usuario';

const routes = new Router();

routes.post('/auth', AutenticadorController.auth);
routes.use(authInterceptor); // aqui para baixo precissa de token

routes.post('/usuarios', UsuarioController.inclui);
routes.get('/usuarios', UsuarioController.listar);

routes.post('/pessoas', PessoaController.inclui);
routes.get('/pessoas', PessoaController.listar);

routes.post('/lancamento', LancamentoController.incluir);
routes.get('/lancamento', LancamentoController.listar);
export default routes;
