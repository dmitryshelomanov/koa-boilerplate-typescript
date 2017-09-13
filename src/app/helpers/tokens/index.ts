import * as Koa from 'koa';

import createToken from './createToken';

import * as Router from 'koa-router';

export default class Initial extends createToken {

  private router: Router;

  constructor() { 
    super();
    this.router = new Router({
      prefix: '/api'
    });
  }

  public initialize() {
    
    return (ctx: Koa.Context, next: () => Promise<any>) => { 
      
      ctx.request.body.getUser = this.getUser;

      this.router.post('/token', async (ctx, next): Promise<any> => { 
        let { login, password } = ctx.request.body;
        if (!login || !password) return ctx.throw(401);
        let data = await this.createOrGetToken(login, password);
        if (!data) { 
          return ctx.throw(401);
        }
        ctx.body = {
          user: data.user,
          token: data.token
        }
      });
      /**
       * Получить юзера по токену 
       */
      this.router.post('/token/user', async (ctx, next): Promise<any> => { 
        let user = await this.getUser(ctx.request.headers["x-token"]);
        if (user === null) return ctx.throw(401);
        ctx.body = user;
      });

      return this.router.routes()(ctx, next);

    }
    
  }
}