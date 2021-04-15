import { json } from 'body-parser';
import express from 'express';

const PORT = 4000;

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type Database = { todos: Todo[] }

const defaultDb: Database = { todos: [] }

export const initServer = (db: Database = defaultDb) => {
  const app = express();
  app.use(json());

  const todosRouter = express.Router();

  todosRouter.get('/:id', (req, res) => res.json(db.todos.find(({ id }) => id === Number(req.params.id))));
  todosRouter.get('/', (_, res) => res.json({ todos: db.todos }));
  todosRouter.post('/', (req, res) => {
    const newTodo = { ...req.body, completed: false, id: db.todos.length + 1 };
    db.todos.push(newTodo);
    res.json(newTodo);
  });
  todosRouter.put('/:id', (req, res) => {
    const newTodoParams = req.body as Todo;
    const todoToUpdate = db.todos.find(({ id }) => id === Number(req.params.id));
    if (!todoToUpdate) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }
    if (newTodoParams.title) todoToUpdate.title = newTodoParams.title;
    if (newTodoParams.completed) todoToUpdate.completed = newTodoParams.completed;
    res.json(todoToUpdate);
  });
  // todosRouter.delete('/', (_, res) => res.send('Deleta todo')); ??

  app.use('/todos', todosRouter);

  app.use('/', (_, res) => res.send('Hello World'));

  return app;
}

const app = initServer();
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

export default app;
