import { Router } from 'express';
import UsuarioController from './app/controller/UsuarioController';
import PessoaController from './app/controller/PessoaController';
import LancamentoController from './app/controller/LancamentoController';
// import Usuario from './app/models/Usuario';

const routes = new Router();

routes.post('/usuarios', UsuarioController.inclui);
routes.post('/pessoas', PessoaController.inclui);
routes.post('/Lancamento', LancamentoController.incluir);
export default routes;
