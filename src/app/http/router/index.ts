import * as Router from 'koa-router';
import * as Koa from 'koa';

import Web from './web';

const rootRouter = new Router();

rootRouter.use(Web(rootRouter));

export default rootRouter.routes();