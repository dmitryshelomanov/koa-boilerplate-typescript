# koa-boilerplate-typescript
### Авторизация по токену
```js
/**
* url /api/token {login, password} вернет токен и юзера если такой есть в бд
* url /api/token\user {token} вернет юзера по токену
* Проверить токен можно в любом месте где есть Koa.Context через метод ctx.request.body.getUser(token)
*/
/// пример middleware Auth
exports.init = (ctx: Koa.Context): Promise<any> => { 
  return new Promise(async (res, rej) => { 
    let { getUser, token } = ctx.request.body;
    let user = await getUser(token);
    if (user.length === 0) return res({ status: "unAuthorize", code: 401 });
    ctx.request.body.user = user[0];
    res({status: "ok", code: 200});
  });
}
/**
* Политики
* can(полика, Koa.Context, ...args) // все политики регистрируются в config/default.js
* cannot(полика, Koa.Context, ...args)
*/
// пример политики
return new Promise((res, rej) => { // всегда верозврощать промис нужно с bool значением
  if (ctx.user) { 
    return res(true);
  }
  return res(false);
});
```

