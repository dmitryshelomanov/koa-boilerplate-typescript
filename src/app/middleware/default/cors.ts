import * as Koa from 'koa';
import * as cors from 'kcors';

exports.init = (app: Koa): Koa => app.use(cors()); 