import { Todo } from '@/domain/entities/todo.entity';

export type Database = { todos: Todo[] }

export const defaultDb: Database = { todos: [] };
