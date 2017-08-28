import * as Router from 'koa-router';
import * as Koa from 'koa';

import Web from './web';



const router = new Router();

Web(router, {
  middleware: ['auth']
});

export default router.routes();