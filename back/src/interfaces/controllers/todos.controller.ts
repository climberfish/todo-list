import TodosService from '@/application/services/todos.service';
import { Request, Response } from 'express';

const TodosController = {
  getTodo: (req: Request, res: Response): void => {
    const todo = TodosService.getTodo(Number(req.params.id));
    res.json(todo);
  },

  getTodos: (req: Request, res: Response): void => {
    const todos = TodosService.getTodos();
    res.json({ todos });
  },

  createTodo: (req: Request, res: Response): void => {
    const newTodo = TodosService.createTodo(req.body.title);
    res.json(newTodo);
  },

  updateTodo: (req: Request, res: Response): void => {
    const updatedTodo = TodosService.updateTodo(Number(req.params.id), req.body);
    res.json(updatedTodo);
  },
};

export default TodosController;
