import passport from '../../helpers/passport';
import * as Koa from 'koa';

exports.init = (app: Koa): Koa => app.use(passport.initialize());