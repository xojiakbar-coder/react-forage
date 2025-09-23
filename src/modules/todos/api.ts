import { http } from '@/core/services';
import { HttpPromise } from '@/core/types';

import * as Types from './types';

export const Todos = (): HttpPromise<Types.IApi.Response> => http.public.get('/todos');
