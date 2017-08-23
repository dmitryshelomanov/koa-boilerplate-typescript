import { IUser } from '../../models/Users';
import * as Config from 'config';

export default {

  can(call: string, args?: any[]): boolean {
    return policy(call, args);
  },

  cannot(call: string, args?: any[]): boolean {
    return !policy(call, args);
  }

};

const policy = (call: string, args?: any[]): boolean => {
  try {
    return require(`../../policy/${call}`).default(args);
  } catch (err) { 
    throw err;
  }
};