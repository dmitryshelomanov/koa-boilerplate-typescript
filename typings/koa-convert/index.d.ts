declare module 'koa-convert' { 
  import * as Koa from 'koa';
  function convert(mw: Koa.Middleware): Koa.Middleware;
  namespace convert { }
  export = convert;
}