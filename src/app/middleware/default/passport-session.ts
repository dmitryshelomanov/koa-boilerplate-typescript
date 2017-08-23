import * as passport from 'koa-passport';
import * as Koa from 'koa';

exports.init = (app: Koa): Koa => app.use(passport.session());