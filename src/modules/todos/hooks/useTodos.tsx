import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useTodos = () => {
  const initialData: Types.IQuery.Todos = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.Todos>({
    queryKey: ['todos'],
    queryFn: async () => {
      const { data } = await Api.Todos();
      return Mappers.Todos(data);
    },
    initialData
  });

  return { ...args, todos: data };
};

export default useTodos;
