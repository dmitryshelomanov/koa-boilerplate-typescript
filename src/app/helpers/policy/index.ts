import IPOlicy from '../../contracts/policy/IPolicy';
import * as Config from 'config';
import * as Koa from 'koa';

export default {

  async can(call: string, ctx: Koa.Context, ...args: any[]): Promise<any>{
    return await policy(call, ctx, args);
  },

  async cannot(call: string, ctx: Koa.Context, ...args: any[]): Promise<any> {
    return await !policy(call, ctx, args);
  }

};

const policy = async (call: string, ctx: Koa.Context, args?: any[]): Promise<any> => {
  try {
    let data: IPOlicy = await require(`../../policy/${call}`).default(ctx, args);
    return data;
  } catch (err) { 
    throw err;
  }
};