import * as Router from 'koa-router';
import * as Koa from 'koa';

import Web from './web';
import Tokens from './tokens';


const router = new Router();

Web(router);

Tokens(router, {
  prefix: 'api'
});

export default router.routes();