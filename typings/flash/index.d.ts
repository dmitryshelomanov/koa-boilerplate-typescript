import * as Koa from 'koa';

declare module 'koa' { 
  interface Context { 
    old(key: string): any;
    setFlash(data: object[]): void;
    flash(type: string, html: any): void;
  }
}

export declare namespace flash { }