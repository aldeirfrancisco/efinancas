import { Router } from 'express';

const routes = new Router();

routes.get('/', (resquest, response) =>
  response.json({ msg: 'vamos de la...' })
);

export default routes;
