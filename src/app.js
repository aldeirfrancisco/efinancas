import express from 'express';
import routes from './routes'; // importando rotas para configurar no servidor  express

class App {
  constructor() { // construtor
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() { // metodo
    this.server.use(express.json()); // minha aplicação está pronta para receber requisição  com json, responsavel pelos aquivo json
  }

  routes() { //
    this.server.use(routes);
  }
}

export default new App().server; // disponi
