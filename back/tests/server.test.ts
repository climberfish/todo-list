import { Application } from 'express';
import request from 'supertest';
import { initServer, Todo } from '../src/server';

describe('Todos API', () => {
  let app: Application;
  const todos: Todo[] = [];

  beforeEach(() => {
    app = initServer({ todos });
  });

  it('Get Todo by id', (done) => {
    const theTodo = { id: 1, title: 'title', completed: false };
    app = initServer({ todos: [theTodo] });
    getTodo(1)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toEqual(theTodo);
        done();
      });
  });

  it('Get all Todos', (done) => {
    request(app)
      .get('/todos')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toEqual({ todos });
        done();
      });
  });

  it('Create Todo', (done) => {
    const newTodo = { title: 'New Todo' }
    createTodo(newTodo)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        const createdTodo = res.body;
        expect(createdTodo.title).toEqual(newTodo.title);
        expect(createdTodo.completed).toEqual(false);
        done();
      });
  });

  it('Update Todo', async () => {
    const newTodo = { title: 'New Todo to Update' }

    const { body: createdTodo } = await createTodo(newTodo);
    expect(createdTodo.completed).toEqual(false);

    await request(app).put('/todos/1').send({ completed: true });

    const { body: { completed } } = await getTodo(1);
    expect(completed).toEqual(true);
  });

  const getTodo = (id: number) => request(app).get(`/todos/${id}`);
  const createTodo = (todo: { title: string }) => request(app).post('/todos').send(todo);
});
