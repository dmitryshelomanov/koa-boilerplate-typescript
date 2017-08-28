import * as Koa from 'koa';
import * as Config from 'config';

interface IData { 
  status: string,
  code: number  
}

export default (mw: string[] = []) =>  async (ctx: Koa.Context, next: () => Promise<any>): Promise<any> => { 
  let data: IData,
    initial = 0;
  
  for (let i = initial; i < initial + 1; i++) { 
    data = await require(`../middleware/access/${mw[i]}`).init(ctx);
    if (data.code !== 200) ctx.throw(data.code, data.status);
    if (mw.length !==  initial + 1)  initial++;
  }
  await next();

}
