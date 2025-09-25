import { http } from '@/core/services';
import { HttpPromise } from '@/core/types';

import * as Types from './types';

export const Todos = (): HttpPromise<Types.IApi.Response> => http.public.get('/todos');

export const CompleteRide = ({ telegramId }: { telegramId: string }): HttpPromise<Types.IApi.Single.Response> => {
  return http.public.post(`/driver/complete-ride/`, { params: { telegram_id: telegramId } });
};

// Delete ride
export const DeleteRide = ({
  telegramId,
  rideId
}: {
  telegramId: string;
  rideId: number;
}): HttpPromise<Types.IApi.Single.Response> =>
  http.public.post('/driver/delete-ride/', {
    telegram_id: telegramId,
    ride_id: rideId
  });
