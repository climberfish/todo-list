import TodosService from '@/application/services/todos.service';
import { Request, Response } from 'express';

const TodosController = {
  getTodo: async (req: Request, res: Response): Promise<void> => {
    const todo = await TodosService.getTodo(Number(req.params.id));
    res.json(todo);
  },

  getTodos: async (req: Request, res: Response): Promise<void> => {
    const todos = await TodosService.getTodos();
    res.json({ todos });
  },

  createTodo: async (req: Request, res: Response): Promise<void> => {
    const newTodo = await TodosService.createTodo(req.body.title);
    res.json(newTodo);
  },

  updateTodo: async (req: Request, res: Response): Promise<void> => {
    const updatedTodo = await TodosService.updateTodo(Number(req.params.id), req.body);
    res.json(updatedTodo);
  },
};

export default TodosController;
