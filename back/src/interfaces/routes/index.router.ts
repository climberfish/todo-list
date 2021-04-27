import TodosController from '@/interfaces/controllers/todos.controller';
import express from 'express';

const rootRouter = express.Router();
const todosRouter = express.Router();

rootRouter.use('/todos', todosRouter);

todosRouter.get('/:id', TodosController.getTodo);
todosRouter.get('/', TodosController.getTodos);
todosRouter.post('/', TodosController.createTodo);
todosRouter.put('/:id', TodosController.updateTodo);

export default rootRouter;
