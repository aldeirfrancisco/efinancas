import { Router} from "express";

const routes = new  Router();

routes.get('/', (resquest, response) => {
    return  response.json({msg: "vamos la..."})
});

export default  routes;