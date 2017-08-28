import * as Koa from 'koa';

import createToken from './createToken';

import * as Router from 'koa-router';

export default class Initial extends createToken {

  private router: Router;
  private getUserMethod: any;

  constructor(
    checkUser: (login: string, password: string) => any,
    checkToken: (user_id: number) => any,
    insertToken: (user_id: number, token: string) => any,
    updateToken: (user_id: number, token: string) => any,
    getUser: (token: string) => any,
  ) { 
    super(
      checkUser,
      checkToken,
      insertToken,
      updateToken
    );
    this.router = new Router();
    this.getUserMethod = getUser;
  }

  public initialize() {
    
    return (ctx: Koa.Context, next: () => Promise<any>) => { 
      
      ctx.request.body.getUser = this.getUserMethod;

      this.router.post('/api/token', async (ctx, next): Promise<any> => { 
        let { login, password } = ctx.request.body;
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
      this.router.post('/api/token/user', async (ctx, next): Promise<any> => { 
        let user = await this.getUserMethod(ctx.request.body.token);
        if (user.length === 0) return ctx.throw(401);
        ctx.body = user[0];
      });

      return this.router.routes()(ctx, next);

    }
    
  }
}