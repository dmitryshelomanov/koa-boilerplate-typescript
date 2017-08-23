import * as localStrategy from 'passport-local';

export default interface IDone { 
  (err: any, users?: any, options?: (localStrategy.IVerifyOptions| undefined)): void
}