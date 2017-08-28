import * as Pug from 'pug';
import * as Config from 'config';
import * as Koa from 'koa';

import ITemplate from '../../contracts/template';

exports.init = (app: Koa) => app.use(async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => {
  
  let property: ITemplate = {
    csrf(): any  {
      return ctx.csrf;
    },
    old(key: string): string {
      return ctx.old(key);
    },
    user(): any { 
      return ctx.req.user;
    },
    isAuth(): boolean { 
      return ctx.isAuthenticated();
    },
    isUnauth(): boolean { 
      return ctx.isUnauthenticated();
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