import Token from '../helpers/tokens';
import * as Koa from 'koa';

export default interface args { 
  prefix?: string;
  CheckToken?: (ctx: Koa.Context) => typeof Token
}