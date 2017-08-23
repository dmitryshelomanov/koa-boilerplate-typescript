import * as Koa from 'koa';

export default interface Ipolicy { 
  (ctx: Koa.Context, args: any[]): Promise<any>
}
