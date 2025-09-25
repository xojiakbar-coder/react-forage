import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as Api from '../api.ts';
import * as Types from '../types.ts';
import * as Mappers from '../mappers.ts';

const useCompleteRide = () => {
  const userId = '7277911352';
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (): Promise<any> => {
      const { data } = await Api.CompleteRide({
        telegramId: userId
      });
      return Mappers.RecentRide(data && data);
    },
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: ['driver', 'single'],
          exact: false
        });
      }, 1000);
    }
  });
};

export default useCompleteRide;
