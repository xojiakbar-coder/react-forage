import { METHODS } from './constants';
import { HttpPromise } from '@/core/types';

export declare namespace Http {
  interface BaseRequest {
    body?: any;
    params?: Record<string, string | number | boolean>;
    timeout?: number;
  }

  interface RequestBody {
    [key: string]: any;
  }

  interface HttpClient {
    get: <T = any>(endpoint: string, options?: BaseRequest) => HttpPromise<T>;
    post: <T = any>(endpoint: string, options?: BaseRequest) => HttpPromise<T>;
    put: <T = any>(endpoint: string, options?: BaseRequest) => HttpPromise<T>;
    patch: <T = any>(endpoint: string, options?: BaseRequest) => HttpPromise<T>;
    delete: <T = any>(endpoint: string, options?: BaseRequest) => HttpPromise<T>;
  }
  type HttpMethod = METHODS.GET | METHODS.POST | METHODS.PUT | METHODS.PATCH | METHODS.DELETE;

  interface RequestConfig {
    endpoint: string;
    withAuth?: boolean;
    method: HttpMethod;
    options?: BaseRequest;
  }
}
