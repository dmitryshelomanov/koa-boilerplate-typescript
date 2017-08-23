import * as passport from 'koa-passport';
import * as localStrategy from 'passport-local';

import DoneSignature from '../../contracts/passport/DoneSignature';
import { User } from '../../models/Users';

passport.use(
  new localStrategy.Strategy(
    {
      usernameField: 'login',
      passwordField: 'password',
      passReqToCallback: false
    },
    async (login: string, password: string, done: DoneSignature) => { 
      let user = await User.chekUser(login, password);
      if (!user) {
        return done(null, false, { message: "нету такое юзера или пароль не верный" });
      }
      return done(null, user[0]);
    }
  )
);