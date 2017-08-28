import * as Config from 'config';
import * as Koa from 'koa';
import AliasesStart from './common/aliasesStart';

export default (app: Koa):void => {
  // default moddleware init
  AliasesStart(app);
};