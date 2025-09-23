import { get } from 'radash';

import * as Types from './types';

export const Todo = (src: Partial<Types.IEntity.Todo>): Types.IEntity.Todo => ({
  id: get(src, 'id', 0),
  title: get(src, 'title', ''),
  completed: get(src, 'completed', false),
  userId: get(src, 'userId', 0)
});

export const Todos = (src: Types.IQuery.Todos): Types.IQuery.Todos => src.map(Todo);
