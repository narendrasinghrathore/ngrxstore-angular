export interface IHttpConfig {
  body?: any;
  url: string;
  method: HTTP_METHOD;
}

export enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}
