import * as parser from 'koa-bodyparser';
import * as Koa from 'koa';

exports.init = (app: Koa): Koa => app.use(parser({
  jsonLimit: '56kb'
}));
