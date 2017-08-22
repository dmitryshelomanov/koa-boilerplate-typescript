import * as Koa from 'koa';

declare module 'koa' { 
  interface Context { 
    old(key: string): any;
    setFlash(data: object[]): void;
  }
}

export declare namespace flash { }