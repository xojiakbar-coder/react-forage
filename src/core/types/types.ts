// General types

// XMLHttpRequest types

// HttpResponse, similar to AxiosResponse
export interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, any>;
  config: unknown;
  request?: unknown;
}

// HttpPromise, similar to AxiosPromise
export interface HttpPromise<T = any> extends Promise<HttpResponse<T>> {}
