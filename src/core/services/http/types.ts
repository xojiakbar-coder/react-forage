import { METHODS } from './constants';

export declare namespace Http {
  interface BaseRequest {
    body?: any;
    params?: Record<string, string>;
    timeout?: number;
  }

  interface HttpClient {
    get: (endpoint: string, options?: BaseRequest) => void;
    post: (endpoint: string, options?: BaseRequest) => void;
    put: (endpoint: string, options?: BaseRequest) => void;
    patch: (endpoint: string, options?: BaseRequest) => void;
    delete: (endpoint: string, options?: BaseRequest) => void;
  }

  type HttpMethod = METHODS.GET | METHODS.POST | METHODS.PUT | METHODS.PATCH | METHODS.DELETE;

  interface RequestConfig {
    endpoint: string;
    withAuth?: boolean;
    method: HttpMethod;
    options?: BaseRequest;
  }
}
