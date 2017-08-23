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
    return messages[key] || "";
  };

  ctx.setFlash = (data: object[]): any => {
    if (ctx.session) {
      data.forEach((element: IElement) => {
        messages[element.key] = element.data;
      });
    }
  };

  await next();

  if (ctx.status == 302) { 
    ctx.session.messages = messages;
  };
  
});
  