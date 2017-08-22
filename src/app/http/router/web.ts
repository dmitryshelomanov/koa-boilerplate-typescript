import * as Router from 'koa-router';
import * as Koa from 'koa';

import Users from '../../models/Users';

export default (router: Router, args: object = {}): void => { 

  router.get('/', async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => { 
    let data = await Users.getAll();
    ctx.body = data;
    await next();
  });

};


