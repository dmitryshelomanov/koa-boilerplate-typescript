import * as Koa from 'koa';

exports.init = (app: Koa) => {
  app.use(async (ctx: Koa.Context, next: Function): Promise<any> => {
    try {
      await next();
    } catch (err) {
      console.log(err)
      throw err;
    }
  });
}