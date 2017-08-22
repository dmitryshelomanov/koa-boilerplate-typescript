import * as Logger from 'koa-logger';
import * as Koa from 'koa';

exports.init = (app: Koa): Koa => app.use(Logger());
