import * as Koa from 'koa';
import * as Router from 'koa-router';
import IArgs from '../../contracts/routerArgs';

import combineMiddleware from '../../helpers/combineMiddleware';

export default (router: Router) => { 

  router.get(`/`, async (ctx: Koa.Context) => { 
    ctx.body = "main";
  }); 

  return router.routes();
};

