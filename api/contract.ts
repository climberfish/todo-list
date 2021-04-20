export type Todo = {
  id: number,
  title: string,
  completed: boolean,
}

export type GetTodosRequest = () => Promise<Todo[]>

export type CreateTodoRequest = (title: string) => Promise<Todo>

export type UpdateTodoRequest = (id: number, params: Partial<Omit<Todo, 'id'>>) => Promise<Todo>
