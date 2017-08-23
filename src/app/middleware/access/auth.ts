import * as Koa from 'koa';
import Mw from '../../contracts/middleware';

/**
 * @param {Koa.Context} ctx контекст
 * @param {Mw} parentPromise родительский промис (вызывать resolve или reject в случае ошибки)
 */
export default async (ctx: Koa.Context, parentPromise: Mw): Promise<any> => { 
  await parentPromise.resolve();
}