import * as Config from 'config';
import * as Koa from 'koa';
import AliasesStart from './common/aliasesStart';
import AccessStart from './common/accessStart';

export default (app: Koa):void => {
  // default moddleware init
  AliasesStart(app);
  // access middleware init
  let accessMidleware = Config.get<any>('middleware');
  // проходим по мидлам в конфиге
  for (let pop in accessMidleware) { 
    app.use(async (ctx: Koa.Context, next: Function) => { 
      await AccessStart(accessMidleware[pop], ctx)
        .catch(err => ctx.throw(500));
      // пускаем дальше если цепочка отработала
      await next();
    });
  }
};