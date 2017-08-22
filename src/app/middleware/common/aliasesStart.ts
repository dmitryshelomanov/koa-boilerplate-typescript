import * as Config from 'config';
import * as Koa from 'koa';

export default (app: Koa) => { 
  // инициализация всех мидлов
  Config.get<string[]>('aliases').forEach(
    (middlaware: string): void => { 
      require(`${Config.get<string>('root')}/dist/app/middleware/default/${middlaware}`).init(app);
      console.log(`middlaware ${middlaware} init`);
    }
  );
}