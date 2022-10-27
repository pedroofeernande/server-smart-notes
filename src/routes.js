import {Router} from "express";


import auth from "./middlewares/auth";

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import SessionController from "./controllers/SessionController";

//rotas 
const AnnotationController = require('./controllers/AnnotationController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');



const routes = new Router();

routes.post('/sessions', SessionController.create);
routes.get('/hello', HelloController.index);

//middleware
routes.use(auth);


//rest
//rotas privadas
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);


//Rota Annoations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

//Rota Priority 
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);


//Rota Content
routes.post('/contents/:id', ContentController.update);



export default routes;

