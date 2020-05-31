import { Router} from "express";

const routes = new  Router();

routes.get('/', (resquest, response) => {
    return  response.json({msg: "vamos de la..."})
});

export default routes;