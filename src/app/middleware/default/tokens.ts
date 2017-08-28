import * as Koa from 'koa';
import TokenHelper from '../../helpers/tokens';

import { User } from '../../models/Users';
import { Token } from '../../models/Token';

const token = new TokenHelper(
  User.chekUser,
  Token.checkToken,
  Token.insertToken,
  Token.updateToken,
  User.getUser
);

exports.init = (app: Koa): Koa => app.use(async (ctx, next) => { 
  
  await token.initialize()(ctx, next);

});