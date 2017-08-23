import * as Router from 'koa-router';
import * as Koa from 'koa';
import * as passport from 'koa-passport';

import { User } from '../../models/Users';

export default (router: Router, args: object = {}): void => { 

  router.get('/', async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => { 
    ctx.body = ctx.render('index');
    await next();
  });

  router.post('/login', async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => { 
    await passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true
    })(ctx, next);
  });

};


