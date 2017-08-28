declare module 'kcors' { 
  import * as Koa from 'koa';
  function cors(opt?: any): Koa.Middleware;
  namespace cors { }
  export = cors;
}
