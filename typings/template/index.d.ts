import * as Koa from 'koa';

declare module 'koa' { 
  interface Context { 
    locals: any;
    render(templatePath: string, locals?: any): any;
  }
}

export declare namespace Template { }