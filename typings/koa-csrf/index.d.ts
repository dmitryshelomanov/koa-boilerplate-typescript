declare module 'koa-csrf' { 
  import * as Koa from "koa";
  
  interface CSRFClass { 
    new(opt: any): Koa.Middleware;
  }
  
  const CSRF: CSRFClass;
  
  module 'koa' {
    interface Context {
        csrf: CSRFClass|null;
    }
  }
  
  export = CSRF;
}