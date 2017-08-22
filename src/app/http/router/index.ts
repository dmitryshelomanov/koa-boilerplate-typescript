import * as Router from 'koa-router';

import Web from './web';

const router = new Router();

Web(router);

export default router.routes();