import * as Koa from 'koa';

interface IElement { 
  key: string,
  data: string
}
/**
 * Flash переменные
 */
exports.init = (app: Koa) => app.use(async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => {

  if (!ctx.session) { 
    return ctx.throw(500);
  }

  let messages: any = ctx.session.messages || {};

  delete ctx.session.messages;

  ctx.old = (key: string): any => {
    return messages[key] || null;
  };

  ctx.setFlash = (data: object[]): any => {
    if (ctx.session) {
      data.forEach((element: IElement) => {
        messages[element.key] = element.data;
      });
    }
  };

  ctx.flash = (type: string, html: any): void => { 
    
    if (!ctx.session) return;

    if (type === undefined) {
      return messages || {};
    }
    if (html === undefined) {
      return messages[type] || [];
    }

    if (!ctx.session.messages) {
      ctx.session.messages = {};
    }

    if (!ctx.session.messages[type]) {
      ctx.session.messages[type] = [];
    }

    ctx.session.messages[type].push(html);

  }

  await next();

  if (ctx.status == 302) { 
    ctx.session.messages = messages;
  };
  
});
  