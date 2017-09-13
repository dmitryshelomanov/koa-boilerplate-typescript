import * as Koa from 'koa';
import TokenHelper from '../../helpers/tokens';

const token = new TokenHelper();

exports.init = (app: Koa): Koa => app.use(async (ctx, next) => { 
  
  await token.initialize()(ctx, next);

});