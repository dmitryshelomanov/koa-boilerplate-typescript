import * as passport from 'koa-passport';
import * as localStrategy from 'passport-local';

import DoneSignature from '../../contracts/passport/DoneSignature';

passport.use(
  new localStrategy.Strategy(
    {
      usernameField: 'login',
      passwordField: 'password',
      passReqToCallback: false
    },
    async (login: string, password: string, done: DoneSignature) => { 

    }
  )
);