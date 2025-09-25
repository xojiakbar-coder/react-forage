import { get } from 'radash';

import * as Types from './types';

export const Todo = (src: Partial<Types.IEntity.Todo>): Types.IEntity.Todo => ({
  id: get(src, 'id', 0),
  title: get(src, 'title', ''),
  completed: get(src, 'completed', false),
  userId: get(src, 'userId', 0)
});

export const Todos = (src: Types.IQuery.Todos): Types.IQuery.Todos => src.map(Todo);

export const RecentRide = (src?: any): any => ({
  id: get(src, 'id', 0),
  commissionPaymentScreenshot: get(src, 'commission_payment_screenshot', null),
  isCompleted: get(src, 'is_completed', false),
  createdAt: get(src, 'created_at', ''),
  updatedAt: get(src, 'updated_at', '')
});
