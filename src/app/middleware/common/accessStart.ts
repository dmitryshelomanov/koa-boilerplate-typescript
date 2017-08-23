import * as Koa from 'koa';
import * as Config from 'config';
import parentPromise from '../../contracts/middleware';

interface Mw { 
  routes: any,
  hundlers: Function[]
}

/** получаем мидл. Разбираем и вызываем хандлеры на определенный роут
 * @param {Mw} middleware мидл из конфига.
 * @param {Koa.Context} ctx контекст
 */
export default async (middleware: Mw, ctx: Koa.Context) => {
  return new Promise((resolve, reject): void => { 
    // смотрим роут и текущий урл
    middleware.routes.find(async (path: string): Promise<void> => {
      // если роуты равны выходим из цикла и резолвим
      if (path === ctx.request.url) {

        middleware.hundlers.forEach(async (hundler: (ctx: Koa.Context, parentPromise: parentPromise) => Promise<any>) => {
          await hundler(ctx, {resolve, reject})
            .catch(err => ctx.throw(500));
        });
        return;
        
      }
      resolve();
    });
  })
}