import * as Types from './types';
import { METHODS } from './constants';

import config from '@/config';
import { HttpPromise, HttpResponse } from '@/core/types';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const xhr = new XMLHttpRequest();

export const open = ({ method, endpoint, options }: Types.Http.RequestConfig) => {
  // params
  const params = new URLSearchParams(
    Object.fromEntries(Object.entries(options?.params ?? {}).map(([key, value]) => [key, String(value)]))
  ).toString();

  // url
  const url = new URL(`${BASE_URL}${endpoint}${params ? `?${params}` : ''}`);

  // open
  return xhr.open(method, url);
};

function send<T>({ method, endpoint, options, withAuth }: Types.Http.RequestConfig): HttpPromise<T> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const accessToken = localStorage.getItem(config.api.accessTokenKey) || '';

    // params
    const params = new URLSearchParams(
      Object.fromEntries(Object.entries(options?.params ?? {}).map(([key, value]) => [key, String(value)]))
    ).toString();

    const url = new URL(`${BASE_URL}${endpoint}${params ? `?${params}` : ''}`);

    xhr.open(method, url);

    xhr.setRequestHeader('Content-Type', 'application/json');
    if (withAuth) xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);

    xhr.onload = () => {
      const response: HttpResponse<T> = {
        data: JSON.parse(xhr.responseText),
        status: xhr.status,
        statusText: xhr.statusText,
        headers: {},
        config: {},
        request: xhr
      };
      resolve(response);
    };

    xhr.onerror = () => reject(new Error('Network error'));

    if (options?.body) {
      xhr.send(JSON.stringify(options.body));
    } else {
      xhr.send();
    }
  });
}

// Creates an HTTP client with or without authentication support
const createHttpClient = (withAuth: boolean): Types.Http.HttpClient => ({
  get: (endpoint, options) => send({ method: METHODS.GET, endpoint, options, withAuth }),
  post: (endpoint, options) => send({ method: METHODS.POST, endpoint, options, withAuth }),
  put: (endpoint, options) => send({ method: METHODS.PUT, endpoint, options, withAuth }),
  patch: (endpoint, options) => send({ method: METHODS.PATCH, endpoint, options, withAuth }),
  delete: (endpoint, options) => send({ method: METHODS.DELETE, endpoint, options, withAuth })
});

const publicHttp = createHttpClient(false);
const privateHttp = createHttpClient(true);

export default { public: publicHttp, private: privateHttp };
