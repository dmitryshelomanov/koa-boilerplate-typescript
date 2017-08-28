import * as Koa from 'koa';

import * as Config from 'config';

import Middleware from './app/middleware/start';

import Router from './app/http/router';


import { User } from './app/models/users';

const app = new Koa();

Middleware(app);

app.use(Router);

app.listen(Config.get<number>('port'));