import * as Pug from 'pug';
import * as Config from 'config';
import * as Koa from 'koa';

exports.init = (app: Koa) => app.use(async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => {
  
  let property: object = {
    csrf() {
      return ctx.csrf;
    },
    old(key: string) {
      return ctx.old(key);
    }
  }

  ctx.render = (templatePath: string, locals: any) => {
    locals = locals || {};
    return Pug.renderFile(
      `${Config.get('root')}/views/${templatePath}.pug`,
      {
        ...property,
        ...locals
      }
    );
  };
  
  await next();
  
});