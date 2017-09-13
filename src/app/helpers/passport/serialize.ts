import * as passport from 'koa-passport';

import DoneSignature from '../../contracts/passport/DoneSignature';

passport.serializeUser((user: any, done: DoneSignature): void => { 
  done(null, user.id);
});

passport.deserializeUser((id: number, done: DoneSignature): void => { 

});