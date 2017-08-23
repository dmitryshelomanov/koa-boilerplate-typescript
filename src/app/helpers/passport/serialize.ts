import * as passport from 'koa-passport';

import { User, IUser } from '../../models/Users';
import DoneSignature from '../../contracts/passport/DoneSignature';

passport.serializeUser((user: IUser, done: DoneSignature): void => { 
  done(null, user.id);
});

passport.deserializeUser((id: number, done: DoneSignature): void => { 
  User
    .findOne(id)
    .then(user => done(null, user[0]))
    .catch(err => done(err));
});