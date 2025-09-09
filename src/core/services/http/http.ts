import * as Types from './types';
import { METHODS } from './constants';

import config from '@/config';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const xhr = new XMLHttpRequest();

// Opens a new request with the given method and URL
export const open = ({ method, endpoint, options }: Types.Http.RequestConfig) => {
  const params = new URLSearchParams(options?.params).toString();
  const url = new URL(`${BASE_URL}${endpoint}${params ? `?${params}` : ''}`);
  return xhr.open(method, url);
};

// Sends the request to the server (with or without body)
function send({ method, endpoint, options, withAuth }: Types.Http.RequestConfig) {
  const accessToken = localStorage.getItem(config.api.accessTokenKey) || '';
  open({ method, endpoint });
  xhr.setRequestHeader('Content-Type', 'application/json');
  if (withAuth) xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
  if (options?.body) xhr.send(JSON.stringify(options.body));
  xhr.send();
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

export default { publicHttp, privateHttp };
