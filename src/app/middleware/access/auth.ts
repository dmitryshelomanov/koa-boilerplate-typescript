import * as Koa from 'koa';
import Mw from '../../contracts/middleware';

exports.init = (ctx: Koa.Context): Promise<any> => { 
  return new Promise(async (res, rej) => { 
    let { getUser, token } = ctx.request.body;
    let user = await getUser(token);
    if (user.length === 0) return res({ status: "unAuthorize", code: 401 });
    ctx.request.body.user = user[0];
    res({status: "ok", code: 200});
  });
}