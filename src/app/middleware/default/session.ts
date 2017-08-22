import * as Session from 'koa-generic-session';
import * as Convert from 'koa-convert';
import * as Config from 'config';
import * as Koa from 'koa';

exports.init = (app: Koa) => { 
  app.use(
    Convert(
      Session({
        key: 'sid',
        cookie: {
          httpOnly: true,
          path: '/',
          rewrite: true,
          signed: false
        }
      })
    )
  );
}
