import * as Router from 'koa-router';
import * as Koa from 'koa';
import * as passport from 'koa-passport';

import { User } from '../../models/Users';
import Policy from '../../helpers/policy';

import Args from '../../contracts/routerArgs';

import combineMiddleware from '../../helpers/combineMiddleware';

export default (router: Router, args: Args): void => { 

  router.get('/', combineMiddleware(args.middleware), async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => {
    
    if (ctx.request.headers.origin) { 
      console.log(ctx.request.headers.origin);
      return ctx.body = "is origin get";
    }
    if (ctx.isAuthenticated()) { 
      return ctx.body = "auth";
    }
    ctx.body = ctx.render('index');
      
  });

  router.post('/post',  combineMiddleware(args.middleware), async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => {
    let { user } = ctx.request.body;
    ctx.body = user;
  });
  
  router.post('/login', async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => { 
    await passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true
    })(ctx, next);
  });

};


