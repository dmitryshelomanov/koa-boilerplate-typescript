import * as Koa from 'koa';
import * as Config from 'config';

interface Mw { 
  routes: any,
  hundlers: Function[]
}

/** получаем мидл. Разбираем и вызываем хандлеры на определенный роут
 * @param {Mw} middleware мидл из конфига.
 * @param {Koa.Context} ctx контекст
 */
export default async (middleware: Mw, ctx: Koa.Context) => {
  return new Promise((resolve: any, reject: any): void => { 
    // смотрим роут и текущий урл
    middleware.routes.find(async (path: string): Promise<void> => {
      // если роуты равны выходим из цикла и резолвим
      if (path === ctx.request.url) {
        // может быть массив хандлеров или один хандлер. Смотрим на это выходим из цикла и резолвим
        if (middleware.hundlers instanceof Array) {
          middleware.hundlers.forEach(async (hundler: Function) => {
            await hundler(ctx, {resolve, reject});
          });
          return;
        }
        // да параметр не next, а resolve - иначе ошикба. А так коректно отрабатывет
        await middleware.hundlers(ctx, {resolve, reject});
        return;
      }
      resolve();
    });
  })
}