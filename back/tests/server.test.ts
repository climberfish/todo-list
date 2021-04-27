import request from 'supertest';
import { Todo } from '@/domain/entities/todo.entity';

const todos: Todo[] = [];
jest.mock('@/infra/db', () => ({ defaultDb: { todos } }));
import App from '@/infra/web/server';

describe('Todos API', () => {
  beforeEach(() => {
    todos.length = 0;
  });

  it('Get Todo by id', (done) => {
    const theTodo = { id: 1, title: 'title', completed: false };
    todos.push(theTodo);
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
    request(App)
      .get('/api/todos')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toEqual({ todos });
        done();
      });
  });

  it('Create Todo', (done) => {
    const newTodo = { title: 'New Todo' };
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
    const newTodo = { title: 'New Todo to Update' };

    const { body: createdTodo } = await createTodo(newTodo);
    expect(createdTodo.completed).toEqual(false);

    await request(App).put('/api/todos/1').send({ completed: true });

    const { body: { completed } } = await getTodo(1);
    expect(completed).toEqual(true);
  });

  const getTodo = (id: number) => request(App).get(`/api/todos/${id}`);
  const createTodo = (todo: { title: string }) => request(App).post('/api/todos').send(todo);
});
